import React, { Component } from 'react'
import Summary from '../Summary/Summary'

export class SummaryOption extends Component {
  summary() {
    return Object.keys(this.props.selected)
    .map(key => {
      return <Summary key={key} id={key}
      selected={this.props.selected[key]}
      />
    });
  }
  render() {
    return (
      <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
          {this.summary()}
      </section>
    )
  }
}

export default SummaryOption


