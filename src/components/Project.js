import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

const Project = (props) => {
    const {name, image} = props.data
    const cl = "project"

    return (
    <article className={cl}>
      <div className={`${cl}__img`}>
        <img onLoad={props.onload} src={image} alt={name} />
      </div>
      <Link to={`/p/${props.path}/${name}`} className={`${cl}__warper row`}>
        <h1 style={{color: "#fff"}}>{name}</h1>
      </Link>
    </article>
  )
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  onload: PropTypes.func.isRequired
}

export default Project;
