import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resume extends Component {
    
  render() {
    return (
       <div>
         <form action="/">
            <input type="submit" value="Go Home" className="backbutton"/>
         </form>  
      </div>
        
    )
  }
}

export default Resume
