import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Projects from './Projects';
import Project from './Project';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/:lang" component={Projects} />
          <Route path="/:lang/:id" component={Project} />
          <Route render={() =>  <p>Page not found T_T </p> } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
