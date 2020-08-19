import React, { useState, useRef } from 'react';

import { Base64 } from 'js-base64';

import { format } from 'date-fns';

import MoodIcon from '../../Components/MoodIcon';
import { getMoodColor } from '../../styles/colors';

import getPredefinedName from '../../utils/getPredefinedName';

import { Container, Content, Mood, Entrie } from './styles';

function Home() {
  const [data, setData] = useState({
    version: 0,
    pin: 0,
    isReminderOn: false,
    customMoods: [],
    dayEntries: [],
    daysInRowLongestChain: 0,
    metadata: {
      number_of_entries: 0,
      created_at: 0,
    },
  });

  const inputFile = useRef();

  function importDatabase(e) {
    const reader = new FileReader();

    reader.onerror = () => {
      alert('Erro ao ler arquivo'); // eslint-disable-line no-alert
    };

    reader.onabort = () => {
      alert('Erro ao ler arquivo'); // eslint-disable-line no-alert
    };

    reader.onload = () => {
      const { result } = reader;

      try {
        const response = JSON.parse(Base64.decode(result));

        setData(response);
      } catch (err) {
        alert('Código inválido!'); // eslint-disable-line no-alert
      }
    };

    reader.readAsText(e.target.files[0]);
  }

  return (
    <Container>
      <header>
        <button onClick={() => inputFile.current.click()} type="button">
          Import database
        </button>

        <input
          type="file"
          ref={inputFile}
          accept=".daylio"
          onChange={importDatabase}
          style={{ display: 'none' }}
        />
      </header>

      <Content>
        <aside className="geral">
          <ul className="infos">
            <li>
              <strong>Entries: </strong>
              <span>{data.metadata.number_of_entries}</span>
            </li>
            <li>
              <strong>Sequence: </strong>
              <span>{data.daysInRowLongestChain}</span>
            </li>
            <li>
              <strong>Reminder: </strong>
              <span>{data.isReminderOn ? 'On' : 'Off'}</span>
            </li>
            <li>
              <strong>Password: </strong>
              <span>{data.pin}</span>
            </li>
            <li>
              <strong>Created at: </strong>
              <span>
                {format(new Date(data.metadata.created_at), 'MM/dd/yyyy')}
              </span>
            </li>
            <li>
              <strong>Version: </strong>
              <span>{data.version}</span>
            </li>
          </ul>

          <div className="moods">
            <h1>Moods</h1>

            <ul>
              {data.customMoods.map((mood) => (
                <Mood color={getMoodColor(mood.mood_group_id)} key={mood.id}>
                  <MoodIcon groupId={mood.mood_group_id} />

                  {mood.predefined_name_id >= 1 ? (
                    <strong>
                      {getPredefinedName(mood.predefined_name_id)}
                    </strong>
                  ) : (
                    <strong>{mood.custom_name}</strong>
                  )}
                </Mood>
              ))}
            </ul>
          </div>
        </aside>

        <section className="entries">
          <ul>
            {data.dayEntries.map((entrie) => {
              // Mood Object
              const [mood] = data.customMoods.filter(
                (m) => m.id === entrie.mood
              );

              // Array with all tag names.
              const tags = entrie.tags.map(
                (tag) => data.tags.filter((t) => t.id === tag)[0].name
              );

              return (
                <Entrie
                  key={entrie.id}
                  color={getMoodColor(mood.mood_group_id)}
                >
                  <MoodIcon groupId={mood.mood_group_id} />

                  <div className="infos">
                    <header>
                      <time>
                        {format(
                          new Date(entrie.datetime),
                          'yyyy - EEEE, MMMM dd'
                        )}
                      </time>

                      <div className="mood">
                        {mood.predefined_name_id >= 1 ? (
                          <strong>
                            {getPredefinedName(mood.predefined_name_id)}
                          </strong>
                        ) : (
                          <strong>{mood.custom_name}</strong>
                        )}

                        <time>
                          {format(new Date(entrie.datetime), 'hh:mm a')}
                        </time>
                      </div>
                    </header>

                    <span>{tags.join(', ')}</span>

                    <p>{entrie.note}</p>
                  </div>
                </Entrie>
              );
            })}
          </ul>
        </section>
      </Content>
    </Container>
  );
}

export default Home;
