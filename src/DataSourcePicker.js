import React, { Component } from 'react'
import './css/DataSourcePicker.css'

class DataSource extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      active: this.props.is_active
    }
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  onClick() {
    this.setState({active: !this.state.active});
  }

  render() {
    var activeDataSourceClass;
    if (this.state.active) {
      activeDataSourceClass = "ActiveDataSource";
    } else {
      activeDataSourceClass = "InactiveDataSource";
    }

    var dotColorClass = "OpendoorLightGrey";
    if (this.state.active || this.state.hover) {
      dotColorClass = this.props.dotColorClass;
    }

    return (
      <div className={"DataSource " + activeDataSourceClass}
           onMouseEnter={() => this.toggleHover()}
           onMouseLeave={() => this.toggleHover()}
           onClick={() => this.onClick()}>
        {this.props.name}
        <span className={"DataSourceDot " + dotColorClass}>&#9679;</span>
      </div>
    )
  }
}

class DataSourcePicker extends Component {
  render() {
    return (
      <div className="DataSourcePicker">
        <DataSource is_active={true}
                    dotColorClass="OpendoorBlue"
                    name="Acquisition Offer Requests" />

        <DataSource is_active={false}
                    dotColorClass="OpendoorRuby"
                    name="Resale Offer Requests" />

        <DataSource is_active={false}
                    dotColorClass="OpendoorCitrine"
                    name="Opendoor Home Visits" />
      </div>
    )
  }
}

export default DataSourcePicker
