import React from 'react'
import './Visualisation.scss'

import * as d3 from 'd3'

class Visualisation extends React.Component {

  componentDidMount() { this.renderBalls() }
  componentDidUpdate() { this.renderBalls() }

  renderBalls() {

    let width = window.innerWidth
    let height = window.innerHeight

    let svg = d3.select(this.refs.svg)

    svg.attr("width", width)
       .attr("height", height)

    d3.interval(function(elapsed) {

      svg.selectAll('circle').remove()

      let color = d3.scaleOrdinal(d3.schemeCategory10)

      svg.selectAll('circle')
        .data(d3.range(60).map(function() { return [(Math.random() * (width-64))+32, (Math.random() * (height-64))+32] }))
      .enter().append('circle')
         .attr('transform', function(d) { return 'translate(' + d + ')'; })
         .attr('r', 32)
         .style('fill', function(d, i) { return color(i); });
    }, 500)
  }

  render () {
    return (
      <svg ref='svg' className='visualisation' ></svg>
    )
  }
}

export default Visualisation
