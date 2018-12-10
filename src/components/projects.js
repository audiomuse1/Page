import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Projects extends Component {
  render() {
    return (
      <Link to='/Projects'>
        <div className='projects'>
          <p>PROJECTS</p>
        </div>
      </Link>
    )
  }
}

export default Projects
