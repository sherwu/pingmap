import React, { Component } from 'react'
import './App.css'
import StateMap from './StateMap'

class App extends Component {
   render() {
     return (
        <div className='App'>
          <div className='App-header'>
            <h2>d3ia dashboard</h2>
          </div>
          <div>
            <StateMap />
          </div>
        </div>
     )
   }
}

export default App
