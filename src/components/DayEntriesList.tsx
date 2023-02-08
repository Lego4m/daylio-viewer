import { useMemo } from 'react';

import { format } from 'date-fns';

import { dayEntriesBySections } from '../utils/dayEntriesBySections';

import { isLastItemOfArray } from '../utils/isLastItemOfArray';
import { isArrayEmpty } from '../utils/isArrayEmpty';

import { getMoodInformations } from '../utils/dayEntrieInterpreters';

import { DaylioDB } from '../types/daylio';

interface DayEntriesListProps {
  database: DaylioDB;
}

export function DayEntriesList({ database }: DayEntriesListProps) {
  const dayEntriesSections = useMemo(
    () => dayEntriesBySections(database.dayEntries),
    [database]
  );

  const moods = useMemo(
    () => getMoodInformations(database.customMoods),
    [database]
  );

  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {dayEntriesSections.map((section) => (
        <li className="rounded-lg bg-white shadow" key={section.date}>
          <header className="rounded-t-lg bg-violet-600 py-2 px-4">
            <h1 className="font-bold text-white">
              {format(new Date(section.date), 'EEEE, dd MMMM yyyy')}
            </h1>
          </header>

          <ul className="flex flex-col gap-2 p-4">
            {section.data.map((entrie, entrieIndex) => (
              <li className="flex" key={entrie.id}>
                <div className="mr-4 flex flex-col items-center">
                  <span className="w-5 whitespace-nowrap text-center text-xl font-bold">
                    {moods.find((mood) => mood.id === entrie.mood)?.icon}
                  </span>

                  {!isLastItemOfArray(entrieIndex, section.data) && (
                    <div className="mt-2 flex w-[1px] flex-1 rounded-lg border border-gray-300" />
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <header className="flex items-center gap-2">
                    <h1 className="text-xl font-bold capitalize text-violet-600">
                      {moods.find((mood) => mood.id === entrie.mood)?.name}
                    </h1>

                    <span className="text-sm text-gray-500">
                      {format(new Date(entrie.datetime), 'HH:mm')}
                    </span>
                  </header>

                  {!isArrayEmpty(entrie.tags) && (
                    <ul className="flex flex-wrap gap-1.5">
                      {entrie.tags.map((tagId, tagIndex) => (
                        <li className="flex items-center gap-1.5" key={tagId}>
                          <span className="text-gray-500">
                            {
                              database.tags.find((tag) => tag.id === tagId)
                                ?.name
                            }
                          </span>

                          {!isLastItemOfArray(tagIndex, entrie.tags) && (
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entrie.note_title && (
                    <h1 className="text-xl">{entrie.note_title}</h1>
                  )}

                  {entrie.note && (
                    <p className="whitespace-pre-line">
                      {entrie.note.replace(/<br>/g, '\n')}
                    </p>
                  )}

                  {/* <img src="#" alt="" className="rounded-lg" /> */}
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
