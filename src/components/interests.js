import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Interests extends Component {
  render() {
    return (
      <Link to='/Interests'>
        <div className='interests'>
          <p>INTERESTS</p>
        </div>
      </Link>
    )
  }
}

export default Interests
