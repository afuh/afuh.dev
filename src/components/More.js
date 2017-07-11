import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';

import { site } from '../helpers/api';


const More = () => {
  return (
    <DocumentTitle title={`${site} | more stuff`}>
      <div className="main__section col">
        <Header title="More stuff" />
        <div className="more">
          js30
          fcc
          sasso
          copias de sass
        </div>
      </div>
    </DocumentTitle>
    )
}

export default More
