import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import { siteName } from '../helpers/api';

const style = {
  main: {
    height: "90vh",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    marginBottom: "6px",
    fontSize: "20px",
    textAlign: "center"
  },
  query: {
    color: "#FF9800"
  },
  img: {
    width: "400px",
    borderRadius: "10px"
  }
}

class ErrorMessage extends Component {
  renderMsg() {
    const { message } = this.props
    return (
      <span style={style.message}>
        <span style={style.query}>{message.split(" ")[0] + " "}</span>
        {message.split(" ").slice(1).join(" ")}
      </span>
    )
  }
  render() {
    return (
      <DocumentTitle title={siteName + " | error"}>
        <main className="main__section" style={style.main}>
          {this.renderMsg()}
          <span style={style.message}>But here is a cute cat for you.</span>
          <img src="https://source.unsplash.com/random/?cat,cats" style={style.img} alt='🐈'/>
        </main>
      </DocumentTitle>
    )
  }
}

ErrorMessage.defaultProps = {
  message: "error"
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage;
