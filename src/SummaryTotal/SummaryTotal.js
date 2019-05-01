import React, { Component } from 'react'

export class SummaryTotal extends Component {
  render() {
    const total = 'total'
    /*const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);*/   
    return (
      <div className="summary__total">
        <h1>{total}</h1>
      </div>
    )
  }
}


export default SummaryTotal;