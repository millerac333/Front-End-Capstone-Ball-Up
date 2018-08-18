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
  // componentWillMount() {
  //   fetch("http://localhost:3333/games?_expand=location&_expand=user")
  //     .then(e => e.json())
  //     .then(games => {
  //       // console.log("before split", typeof games);
  //       let userGames = sessionStorage.getItem("currentUser");
  //       // console.log(" user state in game list", userGames);
  //       let createdGames = games.filter(game => {
  //         // console.log("user Id in filter", typeof game.userId);
  //         // console.log("userGames in filter", typeof userGames);
  //         let boolean = +game.userId === +userGames;
  //         // console.log("boolean", boolean);
  //         return boolean;
  //       });
  //       let otherGames = games.filter(game => {
  //         let otherBoolean = +game.userId !== +userGames;
  //         // console.log("otherBoolean", otherBoolean);
  //         // console.log("new user id state", userGames);
  //         return otherBoolean;
  //       });
  //       // console.log("created games", createdGames);
  //       // console.log("other games", otherGames);
  //       this.setState({ games: createdGames, otherGames });
  //     });
  // }

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
              <label htmlFor="games-card-joinedUserId">Game Joined By: </label>
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
