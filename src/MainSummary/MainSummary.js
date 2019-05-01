import React, { Component } from 'react'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import SummaryOption from '../SummaryOption/SummaryOption'

export class MainSummary extends Component {
  render() {   
    return (
      <>
        <SummaryOption 
          summary={this.props.selected}
        />
      <div className="summary__total">
        <SummaryTotal 
          total={this.props.selected}
        />
      </div>
      </>
    )
  }
}

export default MainSummary

