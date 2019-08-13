import React, { Component } from 'react'
import './StateMap.css'
import statedata from './data/us_states'
import { geoAlbers, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'

class StateMap extends Component {
  componentDidMount() {
    const projection = geoAlbers();
    const data = [{'lat': 33.387583, 'long': -112.056912},
                  {'lat': 38.601310, 'long': -121.389073},
                  {'lat': 33.785792, 'long': -84.280779}];

    select('.usMap')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .style('fill', '#1C85E8') // opendoor blue
      .attr('cx', d => projection([d.long, d.lat])[0])
      .attr('cy', d => projection([d.long, d.lat])[1])
      .attr('r', 1)
      .transition()
        .duration(3000)
        .attr('r', 40)
        .style('fill', 'transparent');
  }

  render() {
    const projection = geoAlbers();
    const pathGenerator = geoPath().projection(projection);
    const states = statedata.features
      .map((d, i) => <path key={'path' + i}
                           d={pathGenerator(d)}
                           className='renderedState' />);

    return <svg width={1080} height={500} className='usMap'>{states}</svg>
  }
}

export default StateMap
