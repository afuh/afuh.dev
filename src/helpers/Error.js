import React from 'react';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';

import { siteName } from '../helpers/api';

const randomCat = () => fetch('http://random.cat/meow').then(res => res.json()).then(res => res.file)

const style = {
  main: {
    height: "100vh",
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
    width: "200px"
  }
}

class ErrorMessage extends React.Component {
  constructor(){
    super()
    this.state = {
      cat: ""
    }
  }
  componentDidMount() {
    randomCat().then(cat => this.setState({ cat }))
  }
  renderMsg() {
    const { message, fixed } = this.props
    if (fixed) return <span style={style.message}>{message}</span>
    return (
      <span style={style.message}><span style={style.query}>{message.split(" ")[0] + " "}</span>{message.split(" ").slice(1).join(" ")}</span>
    )

  }
  render() {
    return (
      <DocumentTitle title={siteName + " | error"}>
        <div className="main__section col" style={style.main}>
          {this.renderMsg()}
          <span style={style.message}>But here is a cute cat for you.</span>
          {this.state.cat && <img src={this.state.cat} style={style.img} alt='🐈'/>}
        </div>
      </DocumentTitle>
    )
  }
}

ErrorMessage.defaultProps = {
  message: "error"
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  fixed: PropTypes.bool
}

export default ErrorMessage;
