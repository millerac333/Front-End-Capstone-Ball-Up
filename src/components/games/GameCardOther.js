import React, { Component } from "react";
import JoinedGamesManager from "../../modules/JoinedGamesManager";

export default class GameCardOther extends Component {
  state = {
    otherGames: this.props.otherGames,
    userId: this.props.otherGames.userId,
    joinedUserId: this.props.otherGames.joinedUserId,
    locationId: this.props.otherGames.locationId,
    duration: this.props.otherGames.duration,
    courtSize: this.props.otherGames.courtSize
  };

  addJoinedGame = e => {
    e.preventDefault();
    const joinGame = {
      joinedUserId: this.state.userId,
      joinedGameId: this.state.otherGames
    };

    JoinedGamesManager.add(joinGame).then(() => {
      alert("You have Joined a Game!");
    });
    this.props.history.push("/");
  };

  render() {
    console.log("other games to other card", this.props.otherGames.userId);
    return (
      <React.Fragment>
        <div className="otherGames-card">
          <div className="otherGames-card-body">
            <div className="otherGames-card-courtLocation">
              {this.props.otherGames.location.nameCourt}
            </div>
            <div className="otherGames-card-duraton">
              <label htmlFor="otherGames-card-duration">
                Duration of Game:{" "}
              </label>
              {this.props.otherGames.duration}
              <label htmlFor="otherGames-card-courtSize">Court Size: </label>
            </div>
            <div className="otherGames-card-courtSize">
              {this.props.otherGames.courtSize ? "Full-Court" : "Half-Court"}
            </div>
            <div className="otherGames-card-userId">
              <label htmlFor="otherGames-card-userId">Game Created By: </label>
              {this.props.otherGames.user.username}
            </div>
            <div className="otherGames-card-joinedUserId">
              <label htmlFor="otherGames-card-joinedUserId">
                Game Joined By:{" "}
              </label>
              {this.props.otherGames.joinedUserId}
            </div>
            <div>
              <div>
                <button
                  type="button"
                  onClick={this.addJoinedGame}
                  className="btn btn-primary"
                >
                  Join Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
