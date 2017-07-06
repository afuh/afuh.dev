import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'

import Mark from './Mark'

import { getProject, countTags } from '../helpers/api';

const Zoom = (props) => {
  const data = getProject(props.match.params.name)[0]
  const {name, info, url, code, image, tags, video, gif, md} = data
  const cl = "zoom"
  return (
    <div className="main__section">
      <CSSTransitionGroup className={cl} component="article"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnter={false}
          transitionLeave={false}>

        <div className={`${cl}__warper`}>
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
          <div className={`${cl}__img`}>
            <img src={gif || image} className="" alt=""/>
          </div>
          <div className={`${cl}__links row`}>
            <a className={`${cl}__live`} href={url}>See it live</a>
            <a className={`${cl}__code`} href={code} target="_blank">Code</a>
          </div>
          <div className={`${cl}__content`}>
            <div className={`${cl}__info`}>{md ? <Mark md={md}/> : info}</div>
            <span className={`${cl}__back`} onClick={props.history.goBack}>⇦</span>
          </div>
        </div>
      </CSSTransitionGroup>
    </div>
  )
}

export default Zoom

// <video autoPlay src={video} width="600px" loop="true" poster={image}/>
//×
//⇦
