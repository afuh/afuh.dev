import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Projects from './Projects';
import Home from './Home';
import Zoom from './Zoom';
import Layout from './Layout';

import ErrorMessage  from '../helpers/Error';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:lang/:name" component={Zoom} />
      <Route path="/:lang" component={Projects} />
      <Route render={() => <ErrorMessage /> } />
    </Switch>
  </Layout>
)

export default App;
