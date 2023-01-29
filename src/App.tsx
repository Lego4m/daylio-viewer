import { useState } from 'react';

import { ImportBackupButton } from './components/ImportBackupButton';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  return (
    <div>
      <h1>Hello Daylio Viewer!</h1>

      <ImportBackupButton onDatabase={setDatabase}/>
    </div>
  );
}
