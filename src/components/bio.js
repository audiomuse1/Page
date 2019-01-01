import React, { Component } from 'react'

class Bio extends Component {
  bioToggle() {
    if (this.props.bio === 'a') {
      this.props.changeBio('b')
    }
    if (this.props.bio === 'b') {
      this.props.changeBio('c')
    }
    if (this.props.bio === 'c') {
      this.props.changeBio('d')
    }
    if (this.props.bio === 'd') {
        this.props.changeBio('e')
    }
    if (this.props.bio === 'e') {
      this.props.changeBio('f')
    }
    if (this.props.bio === 'f') {
      this.props.changeBio('g')
    }
    if (this.props.bio === 'g') {
      this.props.changeBio('a')
    }
    console.log(this.props.bio)
  }

  stateCheckBio() {
    // if (this.props.blog !== 'off' || this.props.work !== 'off') {
    //   return null
    // }
    if (this.props.bio === 'a') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
           Hello, My Name is Andrew. <br></br>
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'b') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
           I like:
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'c') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            <div class="likes">Cities</div>
            <img src="https://i.ytimg.com/vi/C9J1p6kO9VA/maxresdefault.jpg" alt="" width="17%"></img>
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'd') {
        return (
          <div className='bio' onClick={this.bioToggle.bind(this)}>
            <h4 id='bio-text'>
            <div class="likes">Public Transit</div>
            <img src="https://www.nycgo.com/images/articles/8785/soc-nycsubway-7train-buglewicz__facebook.jpg"  alt="" width="17%"></img>
            </h4>
          </div>
        )
      }
      if (this.props.bio === 'e') {
        return (
          <div className='bio' onClick={this.bioToggle.bind(this)}>
            <h4 id='bio-text'>
             Bicycling
            </h4>
          </div>
        )
      }
      if (this.props.bio === 'f') {
        return (
          <div className='bio' onClick={this.bioToggle.bind(this)}>
            <h4 id='bio-text'>
             Politics
            </h4>
          </div>
        )
      }
      if (this.props.bio === 'g') {
        return (
          <div className='bio' onClick={this.bioToggle.bind(this)}>
            <h4 id='bio-text'>
             Culture
            </h4>
          </div>
        )
      }



  }

  render() {
    return (
      <div>
        {this.stateCheckBio()}
      </div>
    )
  }
}

export default Bio