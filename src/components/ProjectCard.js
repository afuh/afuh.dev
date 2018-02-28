import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class ProjectCard extends Component {
  state = {
    data: {},
  }
  componentWillMount() {
    const { data } = this.props
    this.handleData(data)
  }
  componentWillUnmount(){
    this.remove()
  }
  componentWillReceiveProps(nextProps) {
    const { data } = nextProps
    this.remove()
    this.handleData(data)
  }
  handleData(data){
    this.setState({ data })
  }
  remove(){
    this.setState({ data: null })
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
    const { path, mini } = this.props
    const { name, image, thumb } = this.state.data

    const cl = mini ? 'mini' : "project"
    const blur = {
      on: {
        opacity: 0.5,
        filter: "blur(5px)"
      },
      off: {
        opacity: 1,
        filter: "blur(0)"
      }
    }
    return (
      <article className={cl}>
        <div className={`${cl}__img`}>
          <ProgressiveImage src={image} placeholder={thumb}>
            {(src, loading) => <img style={loading ? blur.on : blur.off} src={src} alt={name}/>}
          </ProgressiveImage>
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
  mini: PropTypes.bool
}

export default ProjectCard;
