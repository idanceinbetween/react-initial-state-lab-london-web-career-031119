import React, { Component } from "react";

class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  };

  constructor(props) {
    super(props);
  }

  renderMessage() {
    if (this.state.secondsLeft === 0) {
      return `Boom!`;
    }
    return `${this.state.secondsLeft} seconds left before I go boom!`;
  }

  render() {
    console.log("Bomb rendered");

    return this.renderMessage();
  }
}

export default Bomb;
