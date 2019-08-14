import React, { Component } from 'react'
import './StateMap.css'
import statedata from './data/us_states'
import { geoAlbers, geoPath } from 'd3-geo'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'
import moment from 'moment'

class StateMap extends Component {
  createPing(lat, long) {
    const projection = geoAlbers();

    // Main ping that stays for a minute.
    select('.usMap')
      .append('circle')
      .style('fill', '#1C85E8') // opendoor blue
      .attr('cx', projection([long, lat])[0])
      .attr('cy', projection([long, lat])[1])
      .attr('r', 3)
      .transition()
        .duration(60000)
        .style('fill', 'transparent')
        .remove();

    // Outward radiating effect (2 seconds).
    select('.usMap')
      .append('circle')
      .style('fill', '#1C85E8') // opendoor blue
      .attr('cx', projection([long, lat])[0])
      .attr('cy', projection([long, lat])[1])
      .attr('r', 3)
      .transition()
        .duration(2000)
        .attr('r', 40)
        .style('fill', 'transparent')
        .remove();
  }

  tick(data) {
    // if no data left, return
    if(data.length == 0) {
      return;
    }

    var now = moment();
    const top = data[0]

    // If time for first data entry is now (or has passed).
    if(now.startOf('second').isSame(top.time.startOf('second')) ||
       now.isAfter(top.time)) {
      var lat = top.lat;
      var long = top.long;

      // Ping for this data point
      this.createPing(lat, long);

      // Remove data from list
      data.shift();
    }
  }

  componentDidMount() {
    var now = moment();

    // Hard-coded data
    const pingData = [
      {'lat': 33.387583, 'long': -112.056912, 'time': now.clone().add(1, 'seconds')},
      {'lat': 38.601310, 'long': -121.389073, 'time': now.clone().add(2, 'seconds')},
      {'lat': 34.014166, 'long': -117.314303, 'time': now.clone().add(2, 'seconds')},
      {'lat': 45.013151, 'long': -93.127515, 'time': now.clone().add(3, 'seconds')},
      {'lat': 32.844594, 'long': -96.676348, 'time': now.clone().add(5, 'seconds')},
      {'lat': 33.785792, 'long': -84.280779, 'time': now.clone().add(5, 'seconds')},
      {'lat': 33.493561, 'long': -111.898849, 'time': now.clone().add(8, 'seconds')},
      {'lat': 33.767836, 'long': -111.950750, 'time': now.clone().add(10, 'seconds')},
      {'lat': 35.170472, 'long': -80.780689, 'time': now.clone().add(11, 'seconds')},
      {'lat': 29.726890, 'long': -95.357136, 'time': now.clone().add(15, 'seconds')},
    ];

    setInterval(() => this.tick(pingData), 1000);
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
