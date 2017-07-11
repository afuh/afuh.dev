import React from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import { site } from '../helpers/api';

const ErrorMessage = (props) => {
  const style = {
    main: {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center"
    },
    message: {
      fontSize: "20px",
      fontWeight: 200,
      textAlign: "center"
    }
  }
  return (
    <DocumentTitle title={site + " | error"}>
      <div className="main__section col" style={style.main}>
        <span style={style.message}>{props.message}</span>
      </div>
    </DocumentTitle>
  )
}

ErrorMessage.defaultProps = {
  message: "error"
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage;
