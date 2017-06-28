import React from 'react';
import { getInfo } from '../api';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }
  componentDidMount(){
    this.request(this.props.match.params.lang);
  }
  componentWillReceiveProps(nextProps) {
    this.request(nextProps.match.params.lang);
  }
  request(path){
    getInfo(path).then(data => this.setState({ data }))
  }
  render () {
    const { data } = this.state
    return (
      <div>
        {this.props.match.params.lang}
      </div>
    )
  }
}


export default Projects;
