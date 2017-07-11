import React from 'react';
import ReactMarkdown from "react-markdown";

class Markdown extends React.Component {
  constructor(props){
    super(props)
    this.state = {markdown: ""}
  }
  componentWillMount() {
  const md = this.props.md

  fetch(md)
    .then(res => res.text())
    .then(markdown => this.setState({ markdown }))
  }
  render() {
    const { markdown } = this.state;
    return <ReactMarkdown className='markdown' source={markdown} />
  }
}

export default Markdown;
