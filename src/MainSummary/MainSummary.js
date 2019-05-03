import React, { Component } from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import SummaryOption from '../SummaryOption/SummaryOption'

export class MainSummary extends Component {
  render() {
    return (
      <div>
        <SummaryOption
          selected={this.props.selected}
        />
      <div className="summary__total">
        <SummaryTotal 
          selected={this.props.selected}
        />
      </div>
      </div>
    )
  }
}

export default MainSummary;

