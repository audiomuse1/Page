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
           Hello
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'b') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
           My
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'c') {
      return (
        <div className='bio' onClick={this.bioToggle.bind(this)}>
          <h4 id='bio-text'>
            Name
          </h4>
        </div>
      )
    }
    if (this.props.bio === 'd') {
        return (
          <div className='bio' onClick={this.bioToggle.bind(this)}>
            <h4 id='bio-text'>
             is Andrew
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