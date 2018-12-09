import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Link to='/'>
        <div className='header'>
          <h1 id='name'>ANDREW HARTFORD</h1>
        </div>
      </Link>
    )
  }
}

export default Header
