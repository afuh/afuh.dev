import React from 'react';
import PropTypes from 'prop-types';

import { icon } from './api';

const style = {
  spinner: {
    padding: "80px",
    background: "#fff",
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  }
}

const Spinner = (props) => {
  const spinner = icon('tail-spin.svg')
  return (
    <div className="spinner" style={style.spinner}>
      <div style={{position: "relative"}}>
        <img style={{width: "60px"}} src={spinner} alt="spinner"/>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  count: PropTypes.number
}


export default Spinner
