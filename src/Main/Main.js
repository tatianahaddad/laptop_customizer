import React, { Component } from 'react'
import MainForm from '../MainForm/MainForm'
import MainSummary from '../MainSummary/MainSummary';
// import Feature from '../Feature/Feature'
// import MainSummary from '../MainSummary/MainSummary'

export class Main extends Component {
  render() {
    return (
      <main>
          <MainForm 
            features={this.props.features}
            handleUpdateFeature={this.props.handleUpdateFeature}
          />
          <MainSummary
            total={this.props.selected}
          />
        </main>
    )
  }
}

export default Main
