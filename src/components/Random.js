import React from 'react';
import { getInfo } from '../helpers/api';
import Project from './Project';

const Random = () => {
  const data = getInfo('Random')
  return (
    <div className="projects row">
      {data.map((a, i) => (<Project key={i} data={a} />))}
    </div>
  )
}

export default Random;
