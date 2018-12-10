import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomeView from './views/homeView';
import ResumeView from './views/resumeView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={HomeView} />
        <Route path='/Resume' exact component={ResumeView} />
      </Switch>
      </div>
    );
  }
}

export default App;
