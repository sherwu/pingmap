import React, { Component } from 'react'
import './App.css'
import StateMap from './StateMap'
import MapTitle from './MapTitle'
import DataSourcePicker from './DataSourcePicker'

class App extends Component {
   render() {
     return (
        <div className='App'>
          <StateMap />
          <DataSourcePicker />
          <MapTitle />
        </div>
     )
   }
}

export default App
