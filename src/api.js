import axios from 'axios';

export const getInfo = (section) => {
  return axios('https://raw.githubusercontent.com/afuh/afuh.github.io/master/db.json')
    .then(res => res.data.filter(i => i.tags.includes(section)))
    .catch(err => console.log(err))
}
