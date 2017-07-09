import React from 'react';
import PropTypes from 'prop-types';

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
  },
  counter: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#bbb"
  }
}

const Spinner = (props) => {
  const loader = require('../images/tail-spin.svg')
  return (
    <div className="spinner" style={style.spinner}>
      <div style={{position: "relative"}}>
        <img style={{width: "60px"}} src={loader} />
        <div style={style.counter}>{typeof props.count === "number" && props.count}</div>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  count: PropTypes.number
}

Spinner.defaultProps =  {
  count: null
}

export default Spinner
