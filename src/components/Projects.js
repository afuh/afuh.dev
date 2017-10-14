import React from 'react';
import DocumentTitle from 'react-document-title';

import ProjectCard from './ProjectCard';

import { getData, siteName } from '../helpers/api';
import Spinner from '../helpers/Spinner';
import ErrorMessage  from '../helpers/Error';

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      spinner: true
    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  loaded(el){
    const complete = [...el.querySelectorAll('img')]
      .filter(a => !a.src.includes('tail-spin'))
      .map(img => img.complete)
      .filter(complete => !complete)

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
    const path = this.props.match.params.lang || this.props.match.path.split("/").slice(-1).toString()
    const { spinner, data } = this.state

    if (data.error) {
      return <ErrorMessage message={data.error} />
    }
    return (
      <DocumentTitle title={`${siteName} | ${path}`}>
        <main className="main__section">
          <section className="projects" ref={section => this.section = section}>
            {spinner && <Spinner />}
            {data
              .map(project => (
                <ProjectCard
                  mini={true}
                  onload={this.handleLoad}
                  path={path}
                  key={project.name}
                  data={{name: project.name, image: project.image, tags: project.tags}} />
              ))
            }
          </section>
        </main>
      </DocumentTitle>
    )
  }
}

export default Projects;
