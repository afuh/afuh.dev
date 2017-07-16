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
        <section className={cl}>
          {data.map((p, i) => (
            <article className={`${cl}__conteiner`} key={i}>
              <div className={`${cl}__name`}>{p.name}</div>
              <div className={`${cl}__tags`}>
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
              <div className={`${cl}__img`}>
                <img src={p.image} alt={p.name}/>
              </div>
              <p className={`${cl}__info`}>{p.info}</p>
              <div className={`${cl}__links`}>
                <a className={`${cl}__live`} href={p.url}>See it live</a>
                <a className={`${cl}__code`} href={p.code} target="_blank">Code</a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </DocumentTitle>
    )
}

export default More
