import React, { Component } from 'react'
import Header from '../components/header'
import '../App.css';
import Bio from '../components/bio'
import Contact from '../components/contact'

class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: 'a',
    }
    this.changeBio = this.changeBio.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
  }


  changeBio(toggle) {
    this.setState({
      bio: toggle,
    })
  }

  getInitialState() {
    this.setState({
      work: 'off',
      contact: 'off',
      blog: 'off',
      bio: 'a',
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header/>

        <Bio
          bio={this.state.bio}
          changeBio={this.changeBio}
        />
        
      <Contact/>
      </div>
    )
  }
}

export default HomeView;
