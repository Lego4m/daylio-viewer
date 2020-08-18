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
                {format(new Date(data.metadata.created_at), 'mm/dd/yyyy')}
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
            <Entrie color={getMoodColor(1)}>
              <MoodIcon groupId={1} />

              <div className="infos">
                <header>
                  <time>18 de Agosto - 01:08</time>

                  <strong>rad</strong>
                </header>

                <span>Limpando, Estudando, Comendo, Programando.</span>

                <p>
                  Olá Daylio-Viewer, esse é meu mais novo projeto de
                  vizualização da database daylio.
                </p>
              </div>
            </Entrie>
            <Entrie color={getMoodColor(2)}>
              <MoodIcon groupId={2} />

              <div className="infos">
                <header>
                  <time>18 de Agosto - 01:08</time>

                  <strong>good</strong>
                </header>

                <span>Limpando, Estudando, Comendo, Programando.</span>

                <p>
                  Olá Daylio-Viewer, esse é meu mais novo projeto de
                  vizualização da database daylio.
                </p>
              </div>
            </Entrie>
            <Entrie color={getMoodColor(3)}>
              <MoodIcon groupId={3} />

              <div className="infos">
                <header>
                  <time>18 de Agosto - 01:08</time>

                  <strong>meh</strong>
                </header>

                <span>Limpando, Estudando, Comendo, Programando.</span>

                <p>
                  Olá Daylio-Viewer, esse é meu mais novo projeto de
                  vizualização da database daylio.
                </p>
              </div>
            </Entrie>
            <Entrie color={getMoodColor(4)}>
              <MoodIcon groupId={4} />

              <div className="infos">
                <header>
                  <time>18 de Agosto - 01:08</time>

                  <strong>bad</strong>
                </header>

                <span>Limpando, Estudando, Comendo, Programando.</span>

                <p>
                  Olá Daylio-Viewer, esse é meu mais novo projeto de
                  vizualização da database daylio.
                </p>
              </div>
            </Entrie>
            <Entrie color={getMoodColor(5)}>
              <MoodIcon groupId={5} />

              <div className="infos">
                <header>
                  <time>18 de Agosto - 01:08</time>

                  <strong>awful</strong>
                </header>

                <span>Limpando, Estudando, Comendo, Programando.</span>

                <p>
                  Olá Daylio-Viewer, esse é meu mais novo projeto de
                  vizualização da database daylio.
                </p>
              </div>
            </Entrie>
          </ul>
        </section>
      </Content>
    </Container>
  );
}

export default Home;
