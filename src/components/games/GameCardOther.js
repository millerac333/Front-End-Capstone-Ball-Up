import React, { Component } from "react";
// import JoinedGamesManager from "../../modules/JoinedGamesManager";
// import GeneralManager from "../../modules/GeneralManager";
import Btn from "./button";

export default class GameCardOther extends Component {
  state = {
    otherGames: this.props.otherGames,
    userId: this.props.otherGames.userId,
    joinedUserId: this.props.otherGames.joinedUserId,
    locationId: this.props.otherGames.locationId,
    duration: this.props.otherGames.duration,
    courtSize: this.props.otherGames.courtSize,
    join: true
  };

  componentDidMount() {
    let userGames = sessionStorage.getItem("currentUser");
    this.setState({ userId: userGames });
    // console.log("new user id state", typeof userGames);
  }

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
                Requested Number of Players:
                {}
              </label>
              {this.props.otherGames.joinedUserId}
            </div>
            <div>
              <div id="divButton">
                <Btn
                  addJoinedGame={this.props.addJoinedGame}
                  leaveGame={this.props.leaveGame}
                  userGames={this.state.userGames}
                  // {...props}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
