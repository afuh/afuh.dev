import React from 'react';

const spinnerStyle = {
  padding: "80px",
  background: "#fff",
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center"
}

const Spinner = () => {
  const loader = require('../images/tail-spin.svg')
  return (
    <div className="spinner" style={spinnerStyle}>
      <img style={{width: "60px"}} src={loader} />
    </div>
  )
}

export default Spinner
