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
  render() {
    const {name, image} = this.state
    const cl = "project"

    return (
      <article className={cl}>
        <div className={`${cl}__img`}>
          <img onLoad={this.props.onload} onError={this.props.onload} src={image} alt={name} />
        </div>
        <Link to={`/p/${this.props.path}/${name}`} className={`${cl}__warper row`}>
          <h1 style={{color: "#fff"}}>{name}</h1>
        </Link>
      </article>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  onload: PropTypes.func.isRequired
}

export default Project;
