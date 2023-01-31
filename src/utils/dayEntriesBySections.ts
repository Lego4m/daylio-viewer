import { DaylioDB } from '../types/daylio';

import { isSameDay } from 'date-fns';

type DayEntriesSection = {
  date: string;
  data: DaylioDB['dayEntries'];
}

export function dayEntriesBySections(dayEntries: DaylioDB['dayEntries']) {
  const reducedEntries = dayEntries.reduce<DayEntriesSection[]>((acc, entrie) => {
    const entrieDate = new Date(entrie.datetime);

    const indexOfEntrieSection = acc.findIndex((section) =>
      isSameDay(new Date(section.date), entrieDate)
    );

    if (indexOfEntrieSection >= 0) {
      acc[indexOfEntrieSection].data.push(entrie);
    } else {
      acc.push({ date: entrieDate.toISOString(), data: [entrie] });
    }

    return acc;
  }, []);

  const entriesByDecrescentDateOrder = reducedEntries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())  // Order the sections by section date
    .map((section) => ({...section, data: section.data.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())}));  // Order the entries by entrie date

  return entriesByDecrescentDateOrder;
}
