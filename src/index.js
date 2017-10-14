// Favicon by Madebyoliver http://www.flaticon.com/authors/madebyoliver
// .svgs by Hadrien https://www.flaticon.com/authors/hadrien

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import "./main.sass";

import App from './components/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
