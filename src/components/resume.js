import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resume extends Component {
    
  render() {
    return (
        <Link to='/Resume'>
        <div className='resume'>
          <p>Click to look at my resume</p> 
        </div>     
        </Link>
        
    )
  }
}

export default Resume
