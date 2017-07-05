import React from 'react';
import { getProject } from '../helpers/api';
import { CSSTransitionGroup } from 'react-transition-group'

const Zoom = (props) => {
  const data = getProject(props.match.params.name)[0]
  const {name, info, url, code, image, tags, video, gif} = data
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
          <span className={`${cl}__tags`}>{tags.filter(a => a !== "API").map(b => `${b.toLowerCase()} `)}</span>
          <div className={`${cl}__img`}>
            <img src={gif || image} className="" alt=""/>
          </div>
          <div className={`${cl}__content`}>
            <span className={`${cl}__info`}>{info}</span>
            <div className={`${cl}__links row`}>
              <a className={`${cl}__live`} href={url}>See it live</a>
              <a className={`${cl}__code`} href={code} target="_blank">Code</a>
            </div>
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
