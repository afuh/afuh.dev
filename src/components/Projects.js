import React from 'react';
import PropTypes from 'prop-types';

import { getInfo } from '../helpers/api';
import Project from './Project';
import Spinner from './Spinner';

export const Header = (props) => {
  return (
      <div className="header">
        <header><span>{props.title}</span></header>
      </div>
    )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}


class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      count: 0,
      loaded: 0,
      spinner: true
    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  handleLoad(){
    const { count, loaded } = this.state

    const plusOne = loaded + 1
    this.setState({ loaded: plusOne })

    if (count === loaded + 1) {
      this.setState({ spinner: false });
    }
  }
  componentWillMount(){
    const path = this.props.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(path);
    }
  }
  componentWillReceiveProps(nextProps) {
    const path = nextProps.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(path);
    }
  }
  request(path){
    const data = getInfo(path)
    const count = data.length
    this.setState({ data, count, spinner: true, loaded: 0 })
  }
  render () {
    const path = this.props.match.params.lang
    const { count, loaded, spinner, data } = this.state
    console.log({count,loaded, spinner});

     return (
      <div className="main__section col">
        <Header title={path} />
        <section className="projects">
          {spinner && <Spinner />}
          {data.map((project, i) => (
            <Project
              onload={this.handleLoad}
              path={path}
              key={i}
              data={{name: project.name, image: project.image}} />
          ))}
        </section>
      </div>
    )
  }
}

export default Projects;
