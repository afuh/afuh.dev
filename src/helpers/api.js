import db from '../data/db.js'

export const getData = section => {
  if (section === 'Home'){
    return db.filter(i => i.latest)
  }
  const tag = db.filter(i => i.tags.includes(section.toLowerCase()))

  if (!tag.length) {
    return { error: `${section} is not present in our huge database.` }
  }
  return tag
}

export const countTags = tag => {
  const tags = db.map(a => a.tags).reduce((a, b) => a.concat(b))

  const count = tags.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0 ) + 1
    return prev
  }, {})

  return `${tag}(${count[tag]})`
}

export const allTags = () => {
  const arr = db.map(p => p.tags).reduce((a, b) => a.concat(b))
  return arr.filter((tag, i) => arr.indexOf(tag) === i).sort()
}

export const getProject = pr => {
  const project = db.filter(i => i.name.includes(pr))

  if (!project.length) {
    return { error: `${pr} is not a known project.` }
  }
  return project[0]
}

export const icon = file => require(`../images/icons/${file}`)
export const siteName = 'Axel Fuhrmann'
export const nav = ['javascript', 'react', 'node', 'jquery', 'api']
export const contactLinks = [
  { name: "GitHub", url: "https://github.com/afuh", icon: icon('gh.png') },
  { name: "CodePen", url: "https://codepen.io/mage20", icon: icon('cp.png') },
  { name: "E-Mail", url: "mailto:axelfuh@gmail.com", icon: icon('mail.png') }
]
