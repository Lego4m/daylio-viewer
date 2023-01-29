import { useState } from 'react';

import { Logo } from './components/Logo';
import { ImportBackupButton } from './components/ImportBackupButton';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <div>
      <header
        className='max-w-7xl flex justify-between items-center p-4 mx-auto'
      >
        <Logo />

        <ImportBackupButton onDatabase={setDatabase}/>
      </header>
    </div>
  );
}
