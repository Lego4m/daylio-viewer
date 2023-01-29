import { useState, ChangeEvent } from 'react';

import { readDatabaseFile } from './lib/readDatabaseFile';

import { DaylioDB } from './types/daylio';

export function App() {
  const [database, setDatabase] = useState<DaylioDB>({} as DaylioDB);

  async function handleImportBackupFile(e: ChangeEvent<HTMLInputElement>) {
    try {
      setDatabase(await readDatabaseFile(e));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Hello Daylio Viewer!</h1>

      <input
        type='file'
        accept='.daylio'
        onChange={handleImportBackupFile}
      />
    </div>
  );
}
