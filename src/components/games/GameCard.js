import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GameCard extends Component {
  state = {
    games: this.props.games,
    userId: this.props.games.userId,
    joinedUserId: this.props.games.joinedUserId,
    locationId: this.props.games.locationId,
    duration: this.props.games.duration,
    courtSize: this.props.games.courtSize
  };

  render() {
    console.log("PROPS", this.props.games);
    console.log("userId", this.props.games.userId);
    return (
      <React.Fragment>
        <div className="games-card">
          <div className="games-card-body">
            <div className="games-card-courtLocation">
              {this.props.games.location.nameCourt}
            </div>
            <div className="games-card-duraton">
              <label htmlFor="games-card-duration">Duration of Game: </label>
              {this.props.games.duration}
              <label htmlFor="games-card-courtSize">Court Size: </label>
            </div>
            <div className="games-card-courtSize">
              {this.props.games.courtSize ? "Full-Court" : "Half-Court"}
            </div>
            <div className="games-card-userId">
              <label htmlFor="games-card-userId">Game Created By: </label>
              {this.props.games.user.username}
            </div>
            <div className="games-card-joinedUserId">
              <label htmlFor="games-card-joinedUserId">
                Requested Number of Players:
                {}
              </label>
              {this.props.games.joinedUserId}
            </div>
            <div>
              <Link
                className="games-card-link"
                to={{
                  pathname: "/games/edit",
                  state: {
                    games: this.props.games
                  }
                }}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                type="delete"
                onClick={() => this.props.deleteGame(this.props.games.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
