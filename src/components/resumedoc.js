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

    {/* education */}
           <div className="flex-container">
             <div className="location"><p>Austin Coding Academy</p></div>
             <div className="date"><p>Jan 2017 - Dec 2017</p></div>
           </div>
           <p class>•	Full-stack developer program incorporating HTML/CSS/Javascript and various technologies including ReactJS, Redux, MongoDB.</p>

           <div className="flex-container">
             <div className="location"><p>The University of Texas at Austin</p></div>
             <div className="date"><p>Aug 2011 - Dec 2015 </p></div>
           </div>
           <p>•	Bachelor of Science in Chemistry; Focus Track – Computational Chemistry</p>

     {/* skills */}
             <div className="skill"><p>Languages and technologies</p></div>
             <p>•	HTML/CSS/Javascript, Bootstrap, Git, ReactJS, Redux, MongoDB, Heroku, authentication</p>
             <div className="skill"><p>Analytical Chemistry Methods</p></div>
             <p>•	Gas Chromatography, HP Liquid Chromatography, UV-Vis Spectroscopy, IR Spectroscopy</p>
             <div className="skill"><p>Communication</p></div>
             <p>•	HTML/CSS/Javascript, Bootstrap, Git, ReactJS, Redux, MongoDB, Heroku, authentication</p>

      {/* experience */}

            <div className="flex-container">
             <div className="location"><p>Web Developer/Webstore Manager; Bumperactive		</p></div>
             <div className="date"><p> June 2018 - Present</p></div>
           </div>
           <p>• Styling and managing webstores for various political organizations.</p>
             
           <div className="flex-container">
             <div className="location"><p>Front-End Developer (Freelancer); Austin Devs		</p></div>
             <div className="date"><p> May 2018 - Present</p></div>
           </div>
           <p>•	Coding interactive math lessons utilizing jQuery, Desmos, & Bootstrap for startup Mathalicious</p>
           <p>•	Working on the user-interface of new app Nannytribe.  Working with React.js, React-Native and Storybook.</p>  
           
             
            <div className="flex-container">
             <div className="location"><p>Lab Analyst; DHL Analytical Inc.</p></div>
             <div className="date"><p>Jan 2016 - June 2018</p></div>
           </div>
           <p>•	Carried out EPA-approved testing methods through Gas Chromatography, UV/VIS techniques.</p>
            



         </div>     
        </Link>
    )
  }
}

export default ResumeDoc
