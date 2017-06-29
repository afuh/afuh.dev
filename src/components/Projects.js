import React from 'react';
import { getInfo } from '../helpers/api';
import Project from './Project';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount(){
    this.request(this.props.match.params.lang);
  }
  componentWillReceiveProps(nextProps) {
    this.request(nextProps.match.params.lang);
  }
  request(path){
    this.setState({ data: getInfo(path) })
  }
  render () {
    const { data } = this.state
    return (
      <div className="projects row">
        {data.map((a, i) => (<Project key={i} data={a} />))}
      </div>
    )
  }
}


export default Projects;
