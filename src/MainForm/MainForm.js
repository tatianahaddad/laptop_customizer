import React, { Component } from 'react'
import Feature from '../Feature/Feature'

export class Mainform extends Component {
  features() {
    return Object.keys(this.props.features)
    .map(key => {
      return <Feature key={key} id={key} options= {this.props.features[key]}
      updateFeature={this.props.updateFeature}
      selected={this.props.selected[key]} features={this.props.features} 
      />
    });
  }
  render() {

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {this.features()};
      </section>
    )
  }
}

export default Mainform;
