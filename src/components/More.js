import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom'

import Header from './Header';

import { siteName, getData, countTags } from '../helpers/api';


const More = () => {
  const data = getData('extra')
  const cl = "more-stuff"
  return (
    <DocumentTitle title={`${siteName} | more stuff`}>
      <div className="main__section">
        <Header title="More stuff" />
        <section className="more-stuff">
          {data.map((p, i) => (
            <article className={`${cl}__conteiner`} key={i}>
              <div className={`${cl}__img`}>
                <img src={p.image} alt={p.name}/>
              </div>
              <div className={`${cl}__name`}>
                {p.name}
              </div>
              <div className={`${cl}__info`}>
                {p.info}
              </div>
              <div className={`zoom__links row`}>
                <a className={`zoom__live`} href={p.url}>See it live</a>
                <a className={`zoom__code`} href={p.code} target="_blank">Code</a>
              </div>
              <div className={`zoom__tags`}>
                {p.tags
                  .filter(a => !a.includes('extra'))
                  .map(tag => (
                    <Link
                      key={tag}
                      to={`/p/${tag}`}>
                      {countTags(tag)}
                    </Link>
                  ))
                }
              </div>
            </article>
          ))}
        </section>
      </div>
    </DocumentTitle>
    )
}

export default More
