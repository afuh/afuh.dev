import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Project extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      image: null,
    }
  }
  componentWillMount() {
    this.add(this.props.data.name, this.props.data.image)
  }
  componentWillUnmount(){
    this.remove()
  }
  componentWillReceiveProps(nextProps) {
    this.remove()
    this.add(nextProps.data.name, nextProps.data.image)
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
        {tags.map(tag => (
          <Link
            key={tag}
            to={`/p/${tag}`}>
            {tag}
          </Link>
          ))}
      </div>
    )
  }
  render() {
    const { onload, path } = this.props
    const { name, image } = this.state
    const cl = this.props.mini ? 'mini' : "project"

    return (
      <article className={cl}>
        <div className={`${cl}__img`}>
          <img onLoad={onload} onError={onload} src={image} alt={name} />
        </div>
        <Link to={`/p/${path}/${name}`} className={`${cl}__conteiner`}>
          <h1 style={{color: "#fff"}}>{name}</h1>
          {this.props.mini && this.showTags(cl)}
        </Link>
      </article>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  onload: PropTypes.func,
  mini: PropTypes.bool
}

export default Project;
