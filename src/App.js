import React, { Component } from 'react'
import './App.css'
import StateMap from './StateMap'
import MapTitle from './MapTitle'

class App extends Component {
   render() {
     return (
        <div className='App'>
          <StateMap />
          <MapTitle />
        </div>
     )
   }
}

export default App
