const moodColors = ['#fd8d02', '#41a669', '#8f54a5', '#5579a6', '#707b7c'];

export function getMoodColor(groupId) {
  return moodColors[groupId - 1] || moodColors[0];
}
