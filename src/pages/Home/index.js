import React from 'react';

import MoodIcon from '../../Components/MoodIcon';
import { getMoodColor } from '../../styles/colors';

import { Container, Content, Mood, Entrie } from './styles';

function Home() {
  return (
    <Container>
      <header>
        <button type="button">Import database</button>
      </header>

      <Content>
        <aside className="geral">
          <ul className="infos">
            <li>
              <strong>Entries: </strong>
              <span>0</span>
            </li>
            <li>
              <strong>Sequence: </strong>
              <span>0</span>
            </li>
            <li>
              <strong>Reminder: </strong>
              <span>On</span>
            </li>
            <li>
              <strong>Password: </strong>
              <span>0000</span>
            </li>
            <li>
              <strong>Created at: </strong>
              <span>07/22/2020</span>
            </li>
          </ul>

          <div className="moods">
            <h1>Moods</h1>

            <ul>
              <Mood color={getMoodColor(1)}>
                <MoodIcon groupId={1} />
                <strong>Rad</strong>
              </Mood>

              <Mood color={getMoodColor(2)}>
                <MoodIcon groupId={2} />
                <strong>Good</strong>
              </Mood>

              <Mood color={getMoodColor(3)}>
                <MoodIcon groupId={3} />
                <strong>Meh</strong>
              </Mood>

              <Mood color={getMoodColor(4)}>
                <MoodIcon groupId={4} />
                <strong>Bad</strong>
              </Mood>

              <Mood color={getMoodColor(5)}>
                <MoodIcon groupId={5} />
                <strong>Awful</strong>
              </Mood>
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
