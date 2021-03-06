import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';

import Cookies from "universal-cookie";
import Room from "./components/miscellaneous/Room";

export const cookies = new Cookies();

export const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={() => <Welcome/>}/>
      <Route path="/game" exact component={() => <Room/>}/>
    </Switch>
  </Router>
)

export default App;
