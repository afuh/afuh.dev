import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Projects from './Projects';
import Home from './Home';
import Readme from './Readme';

const App = () => {
  return (
    <Router>
      <div className="main row">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/readme" component={Readme} />
          <Route path="/p/:lang" component={Projects} />
          <Route render={() => <p>page not found</p> } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
