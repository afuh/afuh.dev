import React from 'react';

import { icon } from './api';

const style = {
  spinner: {
    padding: "15% 0",
    background: "#fff",
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  }
}

const Spinner = () => (
  <div className="spinner" style={style.spinner}>
    <img style={{width: "60px"}} src={icon('tail-spin.svg')} alt="spinner"/>
  </div>
)


export default Spinner
