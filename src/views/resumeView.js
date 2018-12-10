import React, { Component } from 'react'
import Header from '../components/header'
import '../App.css'
import ResumeDoc from '../components/resumedoc'
import BackButton from '../components/backbutton'



class ResumeView extends Component {


  render() {
    return (
      <div className='App-container'>
        <Header />
        <ResumeDoc/>
      </div>
    )
  }

}
export default ResumeView;
