import { useState } from 'react';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <div className='max-w-7xl p-4 mx-auto'>
      <header className='flex justify-between items-center'>
        <Logo />

        <ImportBackupButton onDatabase={setDatabase}/>
      </header>

      <ul className='flex flex-col gap-4 mt-8'>
        <li className='bg-white shadow rounded-lg'>
          <header className='bg-violet-600 rounded-tl-lg rounded-tr-lg py-2 px-4'>
            <h1 className='text-white font-bold'>
              Hoje, 29 de janeiro
            </h1>
          </header>

          <ul className='flex flex-col gap-2 p-4'>
            <li className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <span className='text-xl font-bold'>
                  :D
                </span>

                <div className='flex flex-1 w-[1px] border border-gray-300 rounded-lg mt-2' />
              </div>

              <div className='flex flex-col gap-1'>
                <header className='flex items-center gap-2'>
                  <h1 className='font-bold text-xl text-violet-600'>
                    Bem
                  </h1>

                  <span className='text-gray-500 text-sm'>
                    21:30
                  </span>
                </header>

                <ul>
                  <li className='flex flex-wrap items-center gap-1.5 text-gray-500'>
                    Programando
                    <div className='h-1.5 w-1.5 rounded-full bg-gray-500' />
                    Jogando
                  </li>
                </ul>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta auctor orci quis pharetra. In vitae ligula non ante aliquet congue at in orci. Suspendisse potenti. Duis placerat lorem a sagittis pretium. Etiam aliquam blandit finibus. Vestibulum sollicitudin gravida cursus. Mauris tempus varius nunc non varius.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
