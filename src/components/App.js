import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Projects from './Projects'
import Home from './Home'
import ProjectPage from './ProjectPage'
import Layout from './Layout'

import ErrorMessage from '../helpers/Error'

import { allTags } from '../helpers/api'

const checkPath = ({ match, history }) => (
  allTags().includes(match.params.lang) ?
    <ProjectPage match={match} history={history}/> :
    <ErrorMessage message='404'/>
)

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:lang" component={Projects} />
      <Route exact path="/:lang/:name" component={checkPath} />
      <Route render={() => <ErrorMessage /> } />
    </Switch>
  </Layout>
)

export default hot(module)(App)
