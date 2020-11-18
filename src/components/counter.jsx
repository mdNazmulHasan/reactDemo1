import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge  m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
