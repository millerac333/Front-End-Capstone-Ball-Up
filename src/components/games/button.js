import React, { Component } from "react";
import JoinedGamesManager from "../../modules/JoinedGamesManager";
// import GeneralManager from "../../modules/GeneralManager";

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
    const joinedGame = {
      userId: this.props.userId,
      gameId: this.props.gameId
    };
    JoinedGamesManager.add(joinedGame).then(() => {
      alert("You have joined a game!");
    });
  };

  leaveGame = id => {
    JoinedGamesManager.remove(id).then(() => {
      alert("You have left a game!");
    });
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
