import React, { Component } from "react";
import JoinedGamesManager from "../../modules/JoinedGamesManager";
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
    // show_button: true
  };

  // componentDidMount() {
  //   fetch("http://localhost:3333/games?_expand=location&_expand=user")
  //     .then(e => e.json())
  //     .then(otherGames => {
  //       // console.log("before split", typeof games);
  //       let userGames = sessionStorage.getItem("currentUser");
  //     });

  addJoinedGame = e => {
    e.preventDefault();
    const joinGame = {
      userId: this.state.userId,
      gameId: this.state.otherGames.id
    };
    JoinedGamesManager.add(joinGame).then(() => {
      alert("You have Joined a Game!");
    });
  };

  // let hideButton = ('show_button') => {
  // button.addEventListener('click',hideshow,false);

  // function hideshow() {
  //     document.getElementById('hidden-div').style.display = 'block';
  //     this.style.display = 'none'
  // }

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
                <Btn />

                {/* {this.state.clicked ? (<Sign/>) : (
                <button
                  id="show_button"
                  className="btn btn-primary"
                  type="button"
                  onClick={this.addJoinedGame}
                >
                  Join Game
                </button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
