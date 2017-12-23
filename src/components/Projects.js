import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import ProjectCard from './ProjectCard';

import { getData, siteName } from '../helpers/api';
import Spinner from '../helpers/Spinner';
import ErrorMessage  from '../helpers/Error';

class Projects extends Component {
  path = this.props.match.params.lang
  state = {
    data: [],
    spinner: true
  }
  handleLoad = () => {
    const loaded = [...this.section.querySelectorAll('img')].filter(i => !i.complete)
    if (!loaded.length) {
      this.setState({spinner: false})
    }
  }
  componentDidMount(){
    if (!this.path) {
      this.request('Home')
    } else {
      this.request(this.path);
    }
  }
  componentWillReceiveProps(nextProps) {
    const path = nextProps.match.params.lang

    if (this.path === path){
      return
    }
    this.path = path
    this.setState({spinner: true})

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
    const path = this.props.match.params.lang || this.props.match.path.split("/").slice(-1).toString()
    const { data } = this.state

    if (data.error) {
      return <ErrorMessage message={data.error} />
    }
    return (
      <DocumentTitle title={`${siteName} | ${path}`}>
        <main className="main__section">
          <section className="projects" ref={section => this.section = section}>
            {data.map(project => (
              <ProjectCard
                mini={true}
                onload={this.handleLoad}
                path={path}
                key={project.name}
                data={{name: project.name, image: project.image, tags: project.tags}}
              />
              ))
            }
          </section>
          {this.state.spinner && <Spinner />}
        </main>
      </DocumentTitle>
    )
  }
}

export default Projects;
