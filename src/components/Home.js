import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Project from './Project';

import { getData, siteName, countTags } from '../helpers/api';
import { db } from '../helpers/db';

const allTags = () => {
  const arr = db.map(p => p.tags).reduce((a, b) => a.concat(b))
  return arr.filter((tag, i) => arr.indexOf(tag) === i).sort()
}

const Latest = (props) => {
  return(
    <div className="latest">
      <div className="latest__conteiner">
        <h3>Latest Projects</h3>
        <section className="projects">
          {props.data.map((project, i) => (
            <Project
              mini={true}
              key={i}
              path={'latest'}
              data={{name: project.name, image: project.image, tags: project.tags}} />
          ))}
        </section>
        <div className="view-more">
          <h3>See More</h3>
          <div className={`see-more__tags`}>
            {allTags().map((tag, i) => (
              <Link
                key={i}
                to={`/p/${tag}`}>
                {countTags(tag).toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

Latest.propTypes = {
  data: PropTypes.array.isRequired
}

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
          <div className="content">
            <div className="intro">
              <h1>Hello, my name is <strong>Axel Fuhrmann</strong>.</h1>
              <h2>I am a self-tought aspiring Front-End Web Developer.</h2>
            </div>
            <Latest data={data}/>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Home;
