import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ScreenA} />
        <Route path="/b" component={ScreenB} />
      </Switch>
    );
  }
}

export default App;
