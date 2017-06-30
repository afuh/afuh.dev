import { db } from './db.js';

// const getRandomProject = (projects) => {
//   const random = []
//   while (random.length < 4) {
//     const r = Math.floor(Math.random() * (projects - 1)) + 1
//     if (random.includes(r)) continue;
//     random.push(r)
//   }
//   return random;
// }

export const getInfo = (section) => {
  if (section === 'Home'){
    return db.filter(i => i.latest);
  }
  return db.filter(i => i.tags.includes(section))
}
