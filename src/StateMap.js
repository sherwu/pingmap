import React, { Component } from 'react'
import './StateMap.css'
import statedata from './data/us_states'
import { geoAlbers, geoPath } from 'd3-geo'

class StateMap extends Component {
  render() {
    const projection = geoAlbers();
    const pathGenerator = geoPath().projection(projection)
    const states = statedata.features
      .map((d, i) => <path key={'path' + i}
                           d={pathGenerator(d)}
                           className='renderedState' />)


    return <svg width={1080} height={500} className='usMap'>{states}</svg>
  }
}

export default StateMap
