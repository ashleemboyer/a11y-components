import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ButtonPage, HomePage } from './pages';
import 'a11y-components/dist/index.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/button' component={ButtonPage} />
    </Switch>
  </Router>
);

export default App;
