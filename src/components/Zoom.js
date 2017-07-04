import React from 'react';
import { getProject } from '../helpers/api';

const Zoom = (props) => {
  const data = getProject(props.match.params.name)[0]
  const {name, info, url, code, image, tags} = data
  const cl = "project"

  return (
    <article className={cl}>
      <div className={`${cl}__img`}>
        <img src={image} alt={name}/>
      </div>
      <div className={`${cl}__warper row`}>
        <div className={`${cl}__content col`}>
          <span className={`${cl}__name`}>{name}</span>
          <span className={`${cl}__info`}>{info}</span>
          <div className={`${cl}__links row`}>
            <a className={`${cl}__live`} href={url}>See it live</a>
            <a className={`${cl}__code`} href={code} target="_blank">Code</a>
          </div>
          <span className={`${cl}__tags`}>{tags.filter(a => a !== "API").map(b => `${b.toLowerCase()} `)}</span>
        </div>
      </div>
    </article>
    )
}

export default Zoom
