import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomeView from './views/homeView';
import ResumeView from './views/resumeView';
// import ProjectsView from './views/projectsView';
import InterestsView from './views/interestsView';
import ProjectView from './views/projectView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={HomeView} />
        <Route path='/Resume' exact component={ResumeView} />
        <Route path='/Projects' exact component={ProjectView} />
        <Route path='/Interests' exact component={InterestsView} />
        {/* <Route path='/Project' exact component={ProjectsView} /> */}
      </Switch>
      </div>
    );
  }
}

export default App;
