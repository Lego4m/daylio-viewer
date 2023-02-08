import { useState } from 'react';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';
import { DayEntriesList } from './components/DayEntriesList';

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
            <section className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <h1 className="mb-2 text-center text-lg font-bold">Diary</h1>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">
                  Longest days in a row:
                </strong>
                <span className="text-green-600">1776</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Entries:</strong>
                <span className="text-green-600">4143</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Moods:</strong>
                <span className="text-green-600">19</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Tags:</strong>
                <span className="text-green-600">40</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Tag Groups:</strong>
                <span className="text-green-600">6</span>
              </p>
            </section>

            <section className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <h1 className="mb-2 text-center text-lg font-bold">Assets</h1>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Photos:</strong>
                <span className="text-green-600">29</span>
              </p>
            </section>

            <section className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <h1 className="mb-2 text-center text-lg font-bold">Miscs</h1>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Version:</strong>
                <span className="text-green-600">20</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Reminder:</strong>
                <span className="text-green-600">Activated</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Pin:</strong>
                <span className="text-green-600">1234</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Platform:</strong>
                <span className="text-green-600">Android</span>
              </p>

              <p className="flex flex-row justify-between">
                <strong className="text-violet-600">Created At:</strong>
                <span className="text-green-600">02/02/2023</span>
              </p>
            </section>
          </main>

          <main className="mt-4 flex flex-col gap-4 md:flex-row">
            <section className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <h1 className="mb-2 text-center text-lg font-bold">Moods</h1>

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
            </section>

            <section className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow">
              <h1 className="mb-2 text-center text-lg font-bold">Tags</h1>

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
            </section>
          </main>

          <DayEntriesList database={database} />
        </>
      )}
    </div>
  );
}
