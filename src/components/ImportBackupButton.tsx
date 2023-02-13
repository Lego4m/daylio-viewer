import { useRef, ChangeEvent } from 'react';

import { Button } from '@chakra-ui/react';

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
    <Button onClick={handleClick} colorScheme="purple">
      Import
      <input
        type="file"
        accept=".daylio"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleImportBackupFile}
      />
    </Button>
  );
}
