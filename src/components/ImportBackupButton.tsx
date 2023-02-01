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
      className='bg-violet-600 text-white text-lg font-bold py-2 px-4 rounded-md'
    >
      Import

      <input
        type='file'
        accept='.daylio'
        className='hidden'
        ref={inputRef}
        onChange={handleImportBackupFile}
      />
    </button>
  )
}