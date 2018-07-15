import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import ProjectCard from './ProjectCard'

import { getData, siteName, countTags, allTags, contactLinks } from '../helpers/api'

const Header = () => (
  <section className="intro">
    <h1>Helloa, my name is <strong>Axel Fuhrmann</strong>.</h1>
    <h2>I am a self-taught Web Developer.</h2>
  </section>
)

const Latest = ({ data }) => (
  <section className="latest">
    <div className="latest__conteiner">
      <h3>Latest Projects</h3>
      <section className="projects">
        {data.map(project => (
          <ProjectCard
            mini={true}
            key={project.name}
            path={project.tags[0]}
            data={{ name: project.name, image: project.image, tags: project.tags }} />
        ))}
      </section>
      <div className="see-more">
        <h3 style={{ padding: "50px 0 5px" }}>See More</h3>
        <div className={`see-more__tags`}>
          {allTags().map(tag => (
            <Link
              key={tag}
              to={`/${tag}`}>
              {countTags(tag).toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
)

Latest.propTypes = {
  data: PropTypes.array.isRequired
}

const Contact = () => (
  <section className="contact">
    <h3>Contact Me</h3>
    <ul className="contact__list">
      {contactLinks.map(link => (
        <li key={link.name}>
          <a
            className='contact__link'
            target="_blank"
            rel='noreferrer noopener'
            href={link.url}>
            <img className={`contact__icon icon-${link.name}`} src={link.icon} alt={link.name}/>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </section>
)



class Home extends Component {
  state = {
    data: []
  }
  componentDidMount(){
    this.request('Home')
  }
  componentWillUpdate(next){
    if (next.location.hash === "#contact") {
      setTimeout(this.scrollToBottom.bind(this))
    }
  }
  scrollToBottom(){
    window.scrollTo(0, this.main.scrollHeight)
  }
  request(path){
    this.setState({ data: getData(path) })
  }
  render(){
    const { data } = this.state
    return (
      <DocumentTitle title={`${siteName} | Web Developer`}>
        <main className="main__section" ref={main => this.main = main}>
          <div className="content">
            <Header />
            <Latest data={data}/>
            <Contact />
          </div>
        </main>
      </DocumentTitle>
    )
  }
}

export default Home
