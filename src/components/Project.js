import React from 'react';
import { Link } from 'react-router-dom'

const Project = (props) => {
    const {name, image} = props.data
    const cl = "project"
    const loader = require('../images/tail-spin.svg')

    if (!image) {
      return (
        <article className={cl}>
          <div className={`${cl}__img`}>
            <img style={{width: "60px"}} src={loader} />
          </div>
        </article>
      )
    }
    return (
    <article className={cl}>
      <div className={`${cl}__img`}>
        <img src={image} alt={name}/>
      </div>
      <Link to={`/p/${props.path}/${name}`} className={`${cl}__warper row`}>
        <h1 style={{color: "#fff"}}>{name}</h1>
      </Link>
    </article>
  )
}


export default Project;
//
// <section className="projects" style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
