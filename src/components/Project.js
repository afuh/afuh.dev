import React from 'react';

const Project = (props) => {
    const {name, info, url, code, image, tags} = props.data
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
            <a className={`${cl}__live`} href={url} target="_blank">See it live</a>
            <a className={`${cl}__code`} href={code} target="_blank">Code</a>
          </div>
          <span></span>
          <span className={`${cl}__tags`}>{tags.filter(a => a !== "API").map(b => `${b.toLowerCase()} `)}</span>
        </div>
      </div>
    </article>
  )
}

export default Project;
