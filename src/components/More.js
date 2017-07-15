import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';

import { siteName } from '../helpers/api';


const More = () => {
  return (
    <DocumentTitle title={`${siteName} | more stuff`}>
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
