import { useState } from 'react';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <div className="mx-auto max-w-7xl p-4">
      <header className="flex items-center justify-between">
        <Logo />

        <ImportBackupButton onDatabase={setDatabase} />
      </header>

      <ul className="mt-8 flex flex-col gap-4">
        <li className="rounded-lg bg-white shadow">
          <header className="rounded-t-lg bg-violet-600 py-2 px-4">
            <h1 className="font-bold text-white">Hoje, 29 de janeiro</h1>
          </header>

          <ul className="flex flex-col gap-2 p-4">
            <li className="flex">
              <div className="mr-4 flex flex-col items-center">
                <span className="text-xl font-bold">:D</span>

                <div className="mt-2 flex w-[1px] flex-1 rounded-lg border border-gray-300" />
              </div>

              <div className="flex flex-col gap-1">
                <header className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-violet-600">Bem</h1>

                  <span className="text-sm text-gray-500">21:30</span>
                </header>

                <ul>
                  <li className="flex flex-wrap items-center gap-1.5 text-gray-500">
                    Programando
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                    Jogando
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque porta auctor orci quis pharetra. In vitae ligula
                  non ante aliquet congue at in orci. Suspendisse potenti. Duis
                  placerat lorem a sagittis pretium. Etiam aliquam blandit
                  finibus. Vestibulum sollicitudin gravida cursus. Mauris tempus
                  varius nunc non varius.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
