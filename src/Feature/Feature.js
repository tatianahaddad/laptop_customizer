import React, { Component } from 'react'

export class Feature extends Component {
  render() {
    const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {
              
              const featureClass = 'feature__option ' ;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={() => this.props.handleUpdateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });
    return (
      <div>
        <h2>
          {features}
        </h2>
      </div>
    )
  }
}

export default Feature
