import React from 'react';
import PropTypes from 'prop-types';

import { getData } from '../helpers/api';
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

const loaded = (el) => {
  const imgEl = el.querySelectorAll('img');
  for (const img of imgEl) {
    if (!img.complete) return false;
  }
  return true;
}

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      spinner: true
    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  handleLoad(){
    const section = this.section
    this.setState({ spinner: !loaded(section) })
  }
  componentDidMount(){
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
    this.setState({ data: getData(path)  })
  }
  render () {
    const path = this.props.match.params.lang
    const { spinner, data } = this.state

     return (
      <div className="main__section col">
        <Header title={path} />
        <section className="projects" ref={section => this.section = section}>
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
