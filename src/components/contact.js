import React, { Component } from 'react'
import githubPic from '../assets/githubpic.png'
import linkedinPic from '../assets/linkedinpic.png'
import profilePic from '../assets/profilepic.jpg'

class Contact extends Component {
  render() {
    return (
      <div className='contact'>
      <div className='contact-items'>
        <h4 id='contact-mail'>
          andrewhartford2@gmail.com
        </h4>
        <div id='logos'>
          <a href='https://github.com/audiomuse1' target='blank'>
            <img src={githubPic} className='icon' id='gh-icon' alt='n'>
            </img>
          </a>
          <a href='https://www.linkedin.com/in/ajhartford/'
            target='blank'>
            <img src={linkedinPic} className='icon' id='li-icon' alt='n'>
            </img>
          </a>
          <a href='https://www.scribd.com/document/379115376/Andrew-Hartford-Resume' target='blank'>
            <img src={profilePic} className='icon' id='li-icon' alt='n'>
            </img>
          </a>
        </div>
      </div>
      </div>
 



//  <div className="contact">
//    <div className='contact-items'>
// <div id='logos'>
// <a href='https://github.com/f1ux1uxday' target='blank'>
//   <img src={profilePic} className='icon' id='gh-icon' alt='n'>
//   </img>
// </a>
// <a href='https://www.linkedin.com/in/lucas-dayton-911109a2/'
//   target='blank'>
//   <img src={profilePic} className='icon' id='li-icon' alt='n'>
//   </img>
// </a>
// <a href='https://repl.it/@fluxpatron' target='blank'>
//   <img src={profilePic} className='icon' id='li-icon' alt='n'>
//   </img>
// </a>
// </div>
// </div>
// </div>
    )
  }
}

export default Contact




// <div className='contact'>
// <div className='contact-items'>
//   <h4 id='contact-mail'>
//     self[at]lucasdayton.com
//   </h4>
//   <div id='logos'>
//     <a href='https://github.com/f1ux1uxday' target='blank'>
//       <img src={gitHubLogo} className='icon' id='gh-icon' alt='n'>
//       </img>
//     </a>
//     <a href='https://www.linkedin.com/in/lucas-dayton-911109a2/'
//       target='blank'>
//       <img src={linkedInLogo} className='icon' id='li-icon' alt='n'>
//       </img>
//     </a>
//     <a href='https://repl.it/@fluxpatron' target='blank'>
//       <img src={replitLogo} className='icon' id='li-icon' alt='n'>
//       </img>
//     </a>
//   </div>
// </div>
// </div>