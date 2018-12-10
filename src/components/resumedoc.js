import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ResumeDoc extends Component {
    
  render() {
    return (
        <Link to='/'>
        <div className='resumedoc'>
         
       <h1 className="name"> Andrew J. Hartford
           <br></br>
            andrewhartford2@gmail.com | (210) 852-0750
       </h1>
            <br></br>

    
           <div className="flex-container">
             <div className="Location"><p>Austin Coding Academy</p></div>
             <div className="Date"><p>Jan 2017 - Dec 2017</p></div>
           </div>

           <div className="flex-container">
             <div className="Location"><p>The University of Texas at Austin</p></div>
             <div className="Date"><p>Aug 2011 - Dec 2015 </p></div>
           </div>
      
     
             <div className="skill"><p>Languages and technologies</p></div>
             <div className="skill"><p>Analytical Chemistry Methods</p></div>
             <div className="skill"><p>Communication</p></div>
        
         </div>     
        </Link>
        
    )
  }
}

export default ResumeDoc
