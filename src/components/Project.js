import React from 'react';

const Project = (props) => {
    const {name, info, url, code, image, tags} = props.data
    const cl = "project"
    return (
    <div className={cl}>
      <img className={`${cl}__img`}src={image}/>
      <div className={`${cl}__content col`}>
        <span className={`${cl}__name`}>{name}</span>
        <span className={`${cl}__info`}>{info}</span>
        <a className={`${cl}__live`} href={url} target="_blank">view it live</a>
        <a className={`${cl}__code`} href={code} target="_blank">code</a>
        <code className={`${cl}__tags`}>{tags.filter(a => a !== "API").map(b => `${b.toLowerCase()} `)}</code>
      </div>      
    </div>
  )
}

export default Project;
