import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

import Header  from './Header';

import Markdown from '../helpers/Markdown'
import { getProject, countTags, siteName } from '../helpers/api';
import ErrorMessage  from '../helpers/Error';

const HandleVisual = (props) => {
  const { video, gif, image } = props.data;

  if (video && video.length) {
    return (
      <video autoPlay loop preload="auto" width="640px" poster={image}>
        <source src={video[0]} type="video/webm"></source>
        <source src={video[1]} type="video/mp4"></source>
      </video>
    )
  }
  return <img src={gif || image} />
}

HandleVisual.propTypes = {
  data: PropTypes.object.isRequired
}

const Zoom = ({ match, history }) => {
  const { name, info, url, code, image, tags, video, gif, md, error } = getProject(match.params.name)
  const cl = "zoom"

  if (error) {
    return <ErrorMessage message={error} />
  }
  return (
    <DocumentTitle title={`${siteName} | ${name}`}>
      <div className="main__section">
        <Header title={match.params.lang} />
        <CSSTransitionGroup className={cl} component="article"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

          <div className={`${cl}__conteiner`}>
            <h1 className={`${cl}__name`}>{name}</h1>
            <div className={`${cl}__tags`}>
              {tags.map(tag => (
                <Link
                  key={tag}
                  to={`/p/${tag}`}>
                  {countTags(tag)}
                </Link>
                ))}
            </div>
            <div className={`${cl}__img`}><HandleVisual data={{video, gif, image}} /></div>
            <div className={`${cl}__links`}>
              {name !== "Portfolio" && <a className={`${cl}__live`} href={url}>See it live</a>}
              <a className={`${cl}__code`} href={code} target="_blank">Code</a>
            </div>
            <div className={`${cl}__content`}>
              <div className={`${cl}__info`}>{md ? <Markdown md={md}/> : info}</div>
              <span className={`${cl}__back`} onClick={history.goBack}>⇦</span>
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    </DocumentTitle>
  )
}

export default Zoom
