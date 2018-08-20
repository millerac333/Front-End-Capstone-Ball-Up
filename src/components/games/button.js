import React, { Component } from "react";
import JoinedGamesManager from "../../modules/JoinedGamesManager";
import GeneralManager from "../../modules/GeneralManager";

export default class Btn extends Component {
  state = {
    join: true,
    otherGames: this.props.otherGames
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
        <button>Join Game</button>
      </div>
    );

    const leave = (
      <div>
        <button>Leave Game</button>
      </div>
    );

    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.join
          ? join.then(e => {
              this.props.addJoinedGame();
            })
          : leave.then(() => {
              this.props.leaveGame(this.props.joinedGame.id);
            })}
      </div>
    );
  }
}
