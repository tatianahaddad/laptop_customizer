import React, { Component } from 'react'
import Feature from '../Feature/Feature'

export class Mainform extends Component {
  render() {
    

    return (
      <>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Feature 
              features={this.props.features}
              handleUpdateFeature={this.props.handleUpdateFeature}
            />
          </section>
        </>
    )
  }
}

export default Mainform;
