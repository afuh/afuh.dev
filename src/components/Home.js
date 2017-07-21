import React from 'react';
import DocumentTitle from 'react-document-title';

import Project from './Project';
import Header from './Header';

import { getData, siteName } from '../helpers/api';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount(){
    this.request('Home')
  }
  request(path){
    this.setState({ data: getData(path) })
  }
  render(){
    const { data } = this.state
    return (
      <DocumentTitle title={`${siteName} | Latests`}>
        <div className="main__section col">
          <Header title={''}/>
          <div className="content" ref={section => this.section = section}>
            <div className="intro">
              <h1>Hello, my name is <strong>Axel Fuhrmann</strong>.</h1>
              <h2>I am a self-tought aspiring Front-End Web Developer.</h2>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Home;

/*
  <section className="projects">
    {data.map((project, i) => (
      <Project
        key={i}
        path={'latest'}
        data={{name: project.name, image: project.image}} />
    ))}
  </section>
  */
