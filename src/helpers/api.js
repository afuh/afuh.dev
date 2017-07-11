import { db } from './db.js';

// export const getInfo = (section) => {
//   if (section === 'Home'){
//     return db.filter(i => i.latest);
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => (resolve(db.filter(i => i.tags.includes(section.toLowerCase())))), 10000)
//   })
// }

export const getData = (section) => {
  if (section === 'Home'){
    return db.filter(i => i.latest);
  }
  const tag = db.filter(i => i.tags.includes(section.toLowerCase()))

  if (!tag.length) {
    return { error: `${section} is not present in our huge database.` }
  }
  return tag;
}

export const countTags = (tag) => {
 const tags = db.map(a => a.tags).reduce((a, b) => a.concat(b))

 const count = tags.reduce((prev, cur) => {
   prev[cur] = (prev[cur] || 0 ) + 1
   return prev
 }, {})

 return `${tag}(${count[tag]})`
}

export const getProject = pr => {
  const project = db.filter(i => i.name.includes(pr))

  if (!project.length) {
    return { error: `${pr} is not a known project.`}
  }
  return project[0]
};

export const site = 'Axel Fuhrmann';
