import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class ProjectCard extends Component {
  state = {
    name: null,
    image: null
  }
  componentWillMount() {
    const { name, image } = this.props.data
    this.add(name, image)
  }
  componentWillUnmount(){
    this.remove()
  }
  componentWillReceiveProps(nextProps) {
    const { name, image } = nextProps.data
    this.remove()
    this.add(name, image)
  }
  add(name, image){
    this.setState({ name, image })
  }
  remove(){
    this.setState({ name: null, image: null })
  }
  showTags(cl){
    const { tags } = this.props.data
    return (
      <div className={`${cl}__tags`}>
        {tags.map(tag => <Link key={tag} to={`/${tag}`}> {tag} </Link>)}
      </div>
    )
  }
  render() {
    const { onload, path, mini } = this.props
    const { name, image } = this.state
    const cl = mini ? 'mini' : "project"

    return (
      <article className={cl}>
        <div className={`${cl}__img`}>
          <img onLoad={onload} onError={onload} src={image} alt={name} />
        </div>
        <Link to={`/${path}/${name}`} className={`${cl}__conteiner`}>
          <h1 style={{color: "#fff"}}>{name}</h1>
        </Link>
        {this.props.mini && this.showTags(cl)}
      </article>
    )
  }
}

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  onload: PropTypes.func,
  mini: PropTypes.bool
}

export default ProjectCard;
