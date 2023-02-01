import { useRef, ChangeEvent } from 'react';

import { readDatabaseFile } from '../lib/readDatabaseFile';

import { DaylioDB } from '../types/daylio';

interface ImportBackupButtonProps {
  onDatabase: (daylioDB: DaylioDB) => void;
}

export function ImportBackupButton({ onDatabase }: ImportBackupButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.click();
  }

  async function handleImportBackupFile(e: ChangeEvent<HTMLInputElement>) {
    try {
      onDatabase(await readDatabaseFile(e));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-violet-600 py-2 px-4 text-lg font-bold text-white"
    >
      Import
      <input
        type="file"
        accept=".daylio"
        className="hidden"
        ref={inputRef}
        onChange={handleImportBackupFile}
      />
    </button>
  );
}
