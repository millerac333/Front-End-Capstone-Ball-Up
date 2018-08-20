import React, { Component } from "react";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

export default class Btn extends Component {
  state = {
    join: true
  };

  handleClick() {
    this.setState(previousState => {
      return {
        join: !previousState.join
      };
    });
  }

  render() {
    const join = (
      <div>
        <button bsStyle="primary" bsSize="large">
          Join Game
        </button>
      </div>
    );

    const leave = (
      <div>
        <button bsStyle="primary" bsSize="large">
          Leave Game
        </button>
      </div>
    );

    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.join ? join : leave}
      </div>
    );
  }
}
