const names = ['rad', 'good', 'meh', 'bad', 'awful'];

export default function getPredefinedName(id) {
  return names[id - 1] || names[0];
}
