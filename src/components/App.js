import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Projects from './Projects';
import Project from './Project';
import Readme from './Readme';

const App = () => {
  return (
    <Router>
      <div className="main row">
        <Nav />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/readme" component={Readme} />
          <Route path="/p/:lang" component={Projects} />
          <Route path="/p/:lang/:id" component={Project} />
          <Route render={() => <p>page not found T_T </p> } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
