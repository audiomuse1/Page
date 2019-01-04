import React, { Component } from 'react'
import Indivisible from '../assets/indivisible.jpg'
import Topher from '../assets/topher.jpg'


class WorkDisplay extends Component {
  showDescription(num) {
    this.props.getDescription(num)
  }

  describer() {
    if (this.props.descript === '0') {
      return (
        <p className='proj-desc'>
          a selection of recent works
        </p>
      )
    }
    if (this.props.descript === '1') {
      return (
        <p className='proj-desc'>
          Indivisible Webstore
        </p>
      )
    }
    if (this.props.descript === '2') {
      return (
        <p className='proj-desc'>
         Topher For Mayor Webstore
        </p>
      )
    }
    if (this.props.descript === '3') {
      return (
        <p className='proj-desc'>
        Nannytribe
        </p>
      )
    }
    if (this.props.descript === '4') {
      return (
        <p className='proj-desc'>
        Mathalicious
        </p>
      )
    }
    if (this.props.descript === '5') {
      return (
        <p className='proj-desc'>
         Remodeling Austin
        </p>
      )
    }
    if (this.props.descript === '6') {
      return (
        <p className='proj-desc'>
          TBD
        </p>
      )
    }
  }

  render() {
    return (
      <div className='work-display'>
        {this.describer()}
        <div className='thumbnail-box'>
          <div className='first row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '1')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://store.indivisible.org/' target='blank'>
                <img className='thumbnail' src={Indivisible} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '2')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='https://store.topherformayor.com/' target='blank'>
                <img className='thumbnail' src={Topher} alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '3')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://hypno-timer.herokuapp.com' target='blank'>
                <img className='thumbnail' src="https://www.gamedev.net/uploads/monthly_2017_09/DJI_0232-Pano-cware-Edit-nware-1920x1000.jpg.a1e8f8be2ca6cbc755eae918aed678c0.jpg" alt=''/>
              </a>
            </div>
          </div>
          <div className='second row'>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '4')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://zenradsyndicate.com/wikisearch.html' target='blank'>
                <img className='thumbnail' src="https://www.gamedev.net/uploads/monthly_2017_09/DJI_0232-Pano-cware-Edit-nware-1920x1000.jpg.a1e8f8be2ca6cbc755eae918aed678c0.jpg" alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '5')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://gilganesh.com/ACE/weather.html' target='blank'>
                <img className='thumbnail' src="https://www.gamedev.net/uploads/monthly_2017_09/DJI_0232-Pano-cware-Edit-nware-1920x1000.jpg.a1e8f8be2ca6cbc755eae918aed678c0.jpg" alt=''/>
              </a>
            </div>
            <div className='row-item'
              onMouseOver={this.showDescription.bind(this, '6')}
              onMouseOut={this.showDescription.bind(this, '0')}>
              <a href='http://gilganesh.com' target='blank'>
                <img className='thumbnail' src="https://www.gamedev.net/uploads/monthly_2017_09/DJI_0232-Pano-cware-Edit-nware-1920x1000.jpg.a1e8f8be2ca6cbc755eae918aed678c0.jpg" alt=''/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkDisplay