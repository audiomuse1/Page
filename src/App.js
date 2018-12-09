import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomeView from './views/homeView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={HomeView} />
      </Switch>
      </div>
    );
  }
}

export default App;
