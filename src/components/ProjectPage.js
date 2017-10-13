import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

import Markdown from '../helpers/Markdown'
import { getProject, countTags, siteName, icon } from '../helpers/api';
import ErrorMessage  from '../helpers/Error';

const HandleVisual = ({ data }) => {
  const { video, gif, image, name } = data;

  if (video && video.length) {
    return (
      <video autoPlay loop preload="auto" width="640px" poster={image}>
        <source src={video[0]} type="video/webm"></source>
        <source src={video[1]} type="video/mp4"></source>
      </video>
    )
  }
  return <img src={gif || image} alt={name}/>
}

HandleVisual.propTypes = {
  data: PropTypes.object.isRequired
}

const Visual = ({ data, cl }) => {
  const {name, tags, video, gif, image, code, url} = data
  return (
    <div className={`${cl}__visual`}>
      <h1 className={`${cl}__name`}>{name}</h1>
      <div className={`${cl}__tags`}>
        {tags.map(tag => (
          <Link
            key={tag}
            to={`/${tag}`}>
            {countTags(tag)}
          </Link>
          ))
        }
      </div>
      <div className={`${cl}__img`}><HandleVisual data={{video, gif, image, name}} /></div>
      <div className={`${cl}__links`}>
        {name !== "Portfolio" && <a className={`${cl}__live`} href={url}>See it live</a>}
        <a className={`${cl}__code`} href={code} target="_blank">Code</a>
      </div>
    </div>
  )
}

Visual.propTypes = {
  data: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}

const Info = ({ data, cl }) => {
  const { md, info } = data
  return (
    <div className={`${cl}__info`}>{md ? <Markdown md={md}/> : info}</div>
  )
}

Info.propTypes = {
  data: PropTypes.object.isRequired,
  cl: PropTypes.string.isRequired
}

const Back = ({ onclick, cl }) => {
  return(
    <div className={`${cl}__back`} onClick={onclick}>
        <img src={icon('back.svg')} />
    </div>
  )
}

Back.propTypes = {
  onclick: PropTypes.func.isRequired,
  cl: PropTypes.string.isRequired
}

const ProjectPage = ({ match, history }) => {
  const { name, info, url, code, image, tags, video, gif, md, error } = getProject(match.params.name)
  const cl = 'zoom'

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
    <DocumentTitle title={`${siteName} | ${name}`}>
      <main className="main__section">

        <CSSTransitionGroup className={cl} component="article"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnter={false}
          transitionLeave={false}>

          <Visual data={{name, tags, video, gif, image, code, url}} cl={cl}/>
          <Info data={{md, info}} cl={cl}/>
          <Back onclick={history.goBack} cl={cl}/>

        </CSSTransitionGroup>
      </main>
    </DocumentTitle>
  )
}

export default ProjectPage
