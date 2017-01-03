import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins-main';
import BinsList from './components/bins/bins-list';
import { Bins } from '../lib/collections/bins';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="bins" component={BinsMain}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});