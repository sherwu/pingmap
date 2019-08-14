import React, { Component } from 'react'
import './MapTitle.css'
import Moment from 'react-moment'

class MapTitle extends Component {
  render() {
    return (
      <div className='MapTitle'>
        <div className='OpendoorLogo'>Opendoor</div>
        <div className='LogoSubtitle'>Live Activity Map</div>
        <div className='LiveTime'>
          <Moment format="ddd MMM Do YYYY, h:mm:ss A z" interval={1000}></Moment>
        </div>
      </div>
    )
  }
}

export default MapTitle
