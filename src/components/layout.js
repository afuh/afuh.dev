import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

const Layout = props => (
  <div className="main">
    <Nav />
    <div>{props.children}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout
