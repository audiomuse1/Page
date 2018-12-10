import React, { Component } from 'react'
import Header from '../components/header'
import '../App.css'
import ProjectList from '../components/projectlist'




class ProjectsView extends Component {


  render() {
    return (
      <div className='App-container'>
        <Header />
        <ProjectList />
      </div>
    )
  }

}
export default ProjectsView