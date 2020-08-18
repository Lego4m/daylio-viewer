import React from 'react';

import MoodIcon from '../../Components/MoodIcon';
import { getMoodColor } from '../../styles/colors';

import { Container, Content, Mood } from './styles';

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
      </Content>
    </Container>
  );
}

export default Home;
