import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Projects from './Projects';
import Home from './Home';
import More from './More';
import Zoom from './Zoom';

import ErrorMessage from '../helpers/Error';

const App = () => {
  return (
    <Router>
      <div className="main">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/more" component={More} />
          <Route path="/p/:lang/:name" component={Zoom} />
          <Route path="/p/:lang" component={Projects} />
          <Route render={() => <ErrorMessage message={'Not found :('} fixed={true}/> } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
