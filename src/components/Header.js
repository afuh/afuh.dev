import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
      <div className="header">
        <header><span>{props.title}</span></header>
      </div>
    )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
