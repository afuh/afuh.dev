import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';

import { getData, siteName, countTags, icon } from '../helpers/api';
import { db } from '../helpers/db';

const Header = () => {
  return (
    <section className="intro">
      <h1>Hello, my name is <strong>Axel Fuhrmann</strong>.</h1>
      <h2>I am a self-taught aspiring Front-End Web Developer.</h2>
    </section>
  )
}

const allTags = () => {
  const arr = db.map(p => p.tags).reduce((a, b) => a.concat(b))
  return arr.filter((tag, i) => arr.indexOf(tag) === i).sort()
}

const Latest = (props) => {
  return(
    <section className="latest">
      <div className="latest__conteiner">
        <h3>Latest Projects</h3>
        <section className="projects">
          {props.data.map((project, i) =>  (
            <ProjectCard
              mini={true}
              key={i}
              path={project.tags[0]}
              data={{name: project.name, image: project.image, tags: project.tags}} />
          ))}
        </section>
        <div className="see-more">
          <h3 style={{padding: "50px 0 5px"}}>See More</h3>
          <div className={`see-more__tags`}>
            {allTags().map((tag, i) => (
              <Link
                key={i}
                to={`/${tag}`}>
                {countTags(tag).toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Latest.propTypes = {
  data: PropTypes.array.isRequired
}

const Contact = () => {
  const links = [
    { name: "GitHub", url: "https://github.com/afuh", icon: icon('gh.png')},
    { name: "CodePen", url: "https://codepen.io/mage20", icon: icon('cp.png')},
    { name: "E-Mail", url: "mailto:axelfuh@gmail.com", icon: icon('mail.png')}
  ]
  return (
    <section className="contact">
      <h3>Contact Me</h3>
      <ul className="contact__list">
        {links.map(link => (
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
}



class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
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
      <DocumentTitle title={`${siteName} | Latests`}>
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

export default Home;
