import React, { Component } from "react";

export default class GameCardOther extends Component {
  state = {
    otherGames: this.props.otherGames,
    userId: this.props.otherGames.userId,
    joinedUserId: this.props.otherGames.joinedUserId,
    locationId: this.props.otherGames.locationId,
    duration: this.props.otherGames.duration,
    courtSize: this.props.otherGames.courtSize
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
              {/* <button
                type="delete"
                onClick={() => this.props.deleteGame(this.props.games.id)}
                className="btn btn-primary"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
