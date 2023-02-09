import { useState } from 'react';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';
import { DayEntriesList } from './components/DayEntriesList';

import { InfoSection } from './components/InfoSection';
import { InfoTitle } from './components/InfoTitle';
import { InfoParagraph } from './components/InfoParagraph';

import { isObjectEmpty } from './utils/isObjectEmpty';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <div className="mx-auto max-w-7xl p-4">
      <header className="flex items-center justify-between">
        <Logo />

        <ImportBackupButton onDatabase={setDatabase} />
      </header>

      {isObjectEmpty(database) ? (
        <div className="mt-8">
          <p className="text-center">Please import a daylio database.</p>
        </div>
      ) : (
        <>
          <main className="mt-8 flex flex-col gap-4 md:flex-row">
            <InfoSection>
              <InfoTitle>Diary</InfoTitle>

              <InfoParagraph title="Longest days in a row:" info="1776" />

              <InfoParagraph title="Entries" info="4143" />

              <InfoParagraph title="Moods" info="19" />

              <InfoParagraph title="Tags" info="40" />

              <InfoParagraph title="Tag Groups" info="6" />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Assets</InfoTitle>

              <InfoParagraph title="Photos" info="29" />
            </InfoSection>

            <InfoSection>
              <InfoTitle>Miscs</InfoTitle>

              <InfoParagraph title="Version" info="20" />

              <InfoParagraph title="Reminder" info="Activated" />

              <InfoParagraph title="Pin:" info="1234" />

              <InfoParagraph title="Platform" info="Android" />

              <InfoParagraph title="Created At" info="02/02/2023" />
            </InfoSection>
          </main>

          <main className="mt-4 flex flex-col gap-4 md:flex-row">
            <InfoSection>
              <InfoTitle>Moods</InfoTitle>

              <ul className="flex flex-col justify-between gap-2 text-center lg:flex-row">
                <li className="flex flex-col text-amber-600">
                  <p className="font-bold">Rad</p>
                  <p>In love</p>
                </li>

                <li className="flex flex-col text-green-600">
                  <p className="font-bold">Good</p>
                  <p>Laughing</p>
                </li>

                <li className="flex flex-col text-blue-600">
                  <p className="font-bold">Meh</p>
                  <p>Tired</p>
                </li>

                <li className="flex flex-col text-purple-600">
                  <p className="font-bold">Bad</p>
                  <p>Anxious</p>
                </li>

                <li className="flex flex-col text-red-600">
                  <p className="font-bold">Awful</p>
                  <p>Desperate</p>
                </li>
              </ul>
            </InfoSection>

            <InfoSection>
              <InfoTitle>Tags</InfoTitle>

              <ul className="grid grid-cols-2 gap-2 text-center lg:grid-cols-4">
                <li>
                  <h1 className="font-bold text-violet-600">Social</h1>

                  <p>Friends</p>
                  <p>Sports</p>
                  <p>Party</p>
                  <p>Camping</p>
                  <p>Beach</p>
                </li>

                <li>
                  <h1 className="font-bold text-violet-600">Recreation</h1>

                  <p>Mangá</p>
                  <p>Playing</p>
                  <p>Drawing</p>
                  <p>Anime</p>
                  <p>Reading</p>
                </li>

                <li>
                  <h1 className="font-bold text-violet-600">Learning</h1>

                  <p>Exam</p>
                  <p>Searching</p>
                  <p>School</p>
                  <p>Programming</p>
                </li>

                <li>
                  <h1 className="font-bold text-violet-600">Health</h1>

                  <p>Dentist</p>
                  <p>Hospital</p>
                  <p>Psychologist</p>
                </li>

                <li>
                  <h1 className="font-bold text-violet-600">Others</h1>

                  <p>Music</p>
                  <p>Dream</p>
                  <p>Purchases</p>
                  <p>Cleaning</p>
                </li>
              </ul>
            </InfoSection>
          </main>

          <DayEntriesList database={database} />
        </>
      )}
    </div>
  );
}
