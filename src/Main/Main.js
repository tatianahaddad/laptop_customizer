import React, { Component } from 'react'
import MainForm from '../MainForm/MainForm'
import MainSummary from '../MainSummary/MainSummary';
// import Feature from '../Feature/Feature'

export class Main extends Component {
  render() {
    return (
      <main>
          <MainForm 
            features={this.props.features}
            handleUpdateFeature={this.props.handleUpdateFeature}
            selected={this.props.selected}
          />
          <MainSummary
            selected={this.props.selected}
          />
        </main>
    )
  }
}

export default Main