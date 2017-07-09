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


// const loaded = (el) => {
//   const complete = [...el.querySelectorAll('img')]
//     .filter(a => !a.src.includes('tail-spin'))
//     .map(img => img.complete)
//     .filter(complete => !complete)
//
//   if (!complete.length) {
//     return true;
//   }
// }

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      spinner: true,
      count: null
    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  loaded(el){
    const complete = [...el.querySelectorAll('img')]
      .filter(a => !a.src.includes('tail-spin'))
      .map(img => img.complete)
      .filter(complete => !complete)

    this.setState({count: complete.length})
    if (!complete.length) {
      return true;
    }
  }
  handleLoad(){
    const spinner = !this.loaded(this.section)
    this.setState({ spinner })
  }
  componentWillMount(){
    this.setState({ spinner: true })
    const path = this.props.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(path);
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: [] })

    const path = nextProps.match.params.lang
    if (!path) {
      this.request('Home')
    } else {
      this.request(path);
    }
  }
  request(path){
    const data = getData(path)
    this.setState({ data })
  }
  render () {
    const path = this.props.match.params.lang
    const { spinner, data } = this.state
     return (
      <div className="main__section col">
        <Header title={path} />
        <section className="projects" ref={section => this.section = section}>
          {spinner && <Spinner count={this.state.count}/>}
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
