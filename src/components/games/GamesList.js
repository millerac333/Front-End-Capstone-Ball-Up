import React, { Component } from "react";
import GameCard from "./GameCard";
import GeneralManager from "../../modules/GeneralManager";
import { Link } from "react-router-dom";

export default class GamesList extends Component {
  state = {
    games: [],
    userId: "",
    joinedUserId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    locations: this.props.locations,
    users: this.props.users
  };

  deleteGame = gameID => {
    GeneralManager.deleteData("games", gameID)
      .then(() => {
        return GeneralManager.getAllData("games");
      })
      .then(gamesList => {
        this.setState({
          games: gamesList
        });
      });
  };

  componentDidMount() {
    fetch("http://localhost:3333/games?_expand=location&_expand=user")
      .then(e => e.json())
      .then(games => {
        console.log("before split", typeof games);
        let userGames = sessionStorage.getItem("currentUser");
        console.log(" user state in game list", userGames);
        let createdGames = games.filter(game => {
          console.log("user Id in filter", typeof game.userId);
          console.log("userGames in filter", typeof userGames);
          let boolean = +game.userId === +userGames;
          console.log("boolean", boolean);
          return boolean;
        });
        let otherGames = games.filter(game => {
          let otherBoolean = +game.userId !== +userGames;
          console.log("otherBoolean", otherBoolean);
          console.log("new user id state", userGames);
          return otherBoolean;
        });
        console.log("created games", createdGames);
        console.log("other games", otherGames);
        this.setState({ games: createdGames, otherGames });
      });
  }

  render() {
    console.log("state of games after rendered", this.state.games);
    return (
      <React.Fragment>
        <Link
          className="add-game"
          to={{
            pathname: "/games/new"
          }}
        >
          Add Game
        </Link>
        <section className="games">
          {this.state.games.map(game => (
            <GameCard key={game.id} games={game} deleteGame={this.deleteGame} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
