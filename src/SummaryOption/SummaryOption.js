import React, { Component } from 'react'

export class SummaryOption extends Component {
  render() {
    const summary = Object.keys(this.props.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.selected[key].cost) }
            </div>
        </div>)
    return (
      <section className="main__summary">
          <h3>NEW GREENLEAF 2018</h3>
          {summary}
      </section>
    )
  }
}

export default SummaryOption


