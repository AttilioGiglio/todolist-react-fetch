import React, { } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home0 from '../Components/LinkButton';
import Home1 from '../Components/Home1'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path='/'component={Home0} exact/>
        <Route path='/home1'component={Home1}/>
      </Switch>
    </Router>
       
 
      )
  }

export default App;
