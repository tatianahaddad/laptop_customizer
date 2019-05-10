import React, { Component } from "react";

export class Feature extends Component {
  render() {
    const option = this.props.id;
    const options = this.props.options.map((item, index) => {
      const selectedClass =
        item.name === this.props.selected.name ? "feature__selected" : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <li key={index} className="feature__item">
          <div
            className={featureClass}
            onClick={e => this.props.updateFeature(option, item)}
          >
            {item.name}(
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.cost)}
            )
          </div>
        </li>
      );
    });
    return (
      <div className="feature" key={option}>
        <div className="feature__name">{option}</div>
        <ul className="feature__list">{options}</ul>
      </div>
    );
  }
}

export default Feature;
