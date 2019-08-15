import React, { Component } from 'react'
import './DataSourcePicker.css'

class DataSourcePicker extends Component {
  render() {
    return (
      <div className="DataSourcePicker">
        <div className="DataSource">
          Acquisition Offer Requests
          <span className="DataSourceDot OpendoorBlue">&#9679;</span>
        </div>

        <div className="DataSource">
          Resale Offer Requests
          <span className="DataSourceDot OpendoorRuby">&#9679;</span>
        </div>

        <div className="DataSource">
          Opendoor Home Visits
          <span className="DataSourceDot OpendoorCitrine">&#9679;</span>
        </div>
      </div>
    )
  }
}

export default DataSourcePicker
