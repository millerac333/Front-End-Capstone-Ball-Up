import React, { Component } from "react";

export default class Btn extends Component {
  state = {
    join: true,
    joinedGames: [],
    userId: this.props.userGames
  };

  handleClick() {
    this.setState(previousState => {
      return {
        join: !previousState.join
      };
    });
  }
  addJoinedGame = () => {
    alert("You have joined a game!");
  };

  leaveGame = () => {
    alert("You have left a game!");
  };

  render() {
    const join = (
      <div>
        <button onClick={this.addJoinedGame}>Join Game</button>
      </div>
    );

    const leave = (
      <div>
        <button onClick={this.leaveGame}>Leave Game</button>
      </div>
    );

    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.join ? join : leave}
      </div>
    );
  }
}
