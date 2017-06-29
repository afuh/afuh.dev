import axios from 'axios';
import { db } from './db.js';

// export const getInfo = (section) => {
//   return axios('https://raw.githubusercontent.com/afuh/afuh.github.io/master/db.json')
//     .then(res => res.data.filter(i => i.tags.includes(section)))
//     .catch(err => console.log(err))
// }

// export const getInfo = (section) => {
//   return new Promise((resolve) => {
//     resolve(db.filter(i => i.tags.includes(section)))
//   })
// }
const getRandomProject = (projects) => {
  const random = []
  for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * (projects - 1)) + 1
    random.push(r)
  }
  return random;
}


export const getInfo = (section) => {
  if (section === 'Random'){
    const indx = getRandomProject(db.length);
    return indx.map(i => db[i]);
  }
  return db.filter(i => i.tags.includes(section))
}
