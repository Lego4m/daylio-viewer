import { DaylioDB } from '../types/daylio';

export function getMoodInformations(moods: DaylioDB['customMoods']) {
  return moods.map((mood) => ({
    ...mood,
    name:
      mood.predefined_name_id >= 1
        ? getPredefinedMoodName(mood.predefined_name_id)
        : mood.custom_name,
    icon: getMoodIcon(mood.mood_group_id),
  }));
}

function getPredefinedMoodName(predefinedId: number) {
  const predefinedMoodsName = ['Rad', 'Good', 'Meh', 'Bad', 'Awful'];

  return predefinedMoodsName[predefinedId - 1];
}

function getMoodIcon(moodGroupId: number) {
  const moodIcons = [':D', ':)', ':|', ':(', ';('];

  return moodIcons[moodGroupId - 1];
}
