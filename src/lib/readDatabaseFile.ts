import { ChangeEvent } from 'react';

import JSZip from 'jszip';
import base64 from 'base-64';
import utf8 from 'utf8';

import { DaylioDB } from '../types/daylio';

export async function readDatabaseFile(
  e: ChangeEvent<HTMLInputElement>
): Promise<DaylioDB> {
  if (!e.currentTarget.files) throw new Error('Error in loading file.');

  const zip = await JSZip.loadAsync(e.currentTarget.files[0]);

  const backupFile = await zip.file('backup.daylio')?.async('string');

  if (!backupFile) throw new Error('File is not valid.');

  const dbdecoded = utf8.decode(base64.decode(backupFile));

  return JSON.parse(dbdecoded);
}
