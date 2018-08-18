import React, { Component } from "react";
import { Route } from "react-router-dom";
import CourtsList from "./courts/CourtsList";
import CourtForm from "./courts/CourtForm";
import GamesList from "./games/GamesList";
import GameForm from "./games/GameForm";
import GamesManager from "../modules/GamesManager";
import UsersManager from "../modules//UsersManager";
import CourtsManager from "../modules/CourtsManager";
import Login from "./login/Login";
import EditGame from "./games/GameEdit";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    locations: [],
    gamesJoined: []
  };

  // deleteGame = id =>
  //   GamesManager.removeAndList(id).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // deleteJoinedGames = id =>
  //   JoinedGamesManager.removeAndList(id).then(joinedGames =>
  //     this.setState({
  //       joinedGames: joinedGames
  //     })
  //   );
  // addGames = games =>
  //   GamesManager.addAndList(games).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // addJoinedGames = joinedGames =>
  //   GamesManager.addAndList(joinedGames).then(joinedGames =>
  //     this.setState({
  //       joinedGames: joinedGames
  //     })
  //   );
  // addUsers = users =>
  //   UsersManager.addAndList(users).then(users =>
  //     this.setState({
  //       users: users
  //     })
  //   );
  // addCourts = courts =>
  //   CourtsManager.addAndList(courts).then(courts =>
  //     this.setState({
  //       courts: courts
  //     })
  //   );
  // editGame = id =>
  //   GamesManager.updateAndList(id).then(games =>
  //     this.setState({
  //       games: games
  //     })
  //   );
  // handleFieldChange = e => {
  //   const stateToChange = {};
  //   stateToChange[e.target.id] = e.target.value;
  //   this.setState(stateToChange);
  // };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  componentDidMount() {
    const _state = {};
    // GamesManager.listWithCaretaker()
    GamesManager.all()
      .then(games => (_state.games = games))
      .then(() => UsersManager.all())
      .then(users => (_state.users = users))
      .then(() => CourtsManager.all())
      .then(locations => (_state.locations = locations))
      .then(() => {
        this.setState(_state);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <CourtsList locations={this.state.locations} />;
            } else {
              return <Login {...props} />;
            }
          }}
        />
        {
          <Route
            exact
            path="/locations"
            render={props => {
              return <CourtsList locations={this.state.locations} />;
            }}
          />
        }
        {/* <Route
     path="/courts/:courtId(\d+)"
     render={props => {
      return (
       <CourtDetail
        {...props}
        deleteCourts={this.deleteCourts}
        courts={this.state.court}
       />
      );
     }}
    /> */}
        <Route
          path="/locations/new"
          render={props => {
            return (
              <CourtForm
                {...props}
                addCourt={this.addCourt}
                // users={this.state.users}
              />
            );
          }}
        />
        <Route
          exact
          path="/games"
          render={props => {
            return (
              <GamesList
                {...props}
                deleteGame={this.deleteGame}
                users={this.state.users}
                games={this.state.games}
              />
            );
          }}
        />
        {/* <Route
     path="/games/:gameId(\d+)"
     render={props => {
      return (
       <EditGame
        {...props}
        hanldleUpdate={this.hanldleUpdate}
        games={this.state.games}
       />
      );
     }} */}
        <Route
          path="/games/new"
          render={props => {
            return (
              <GameForm
                {...props}
                addGame={this.addGame}
                locations={this.state.locations}
              />
            );
          }}
        />
        <Route
          path="/games/edit"
          render={props => {
            return (
              <EditGame
                {...props}
                games={props.location.state.games}
                locations={this.state.locations}
              />
            );
          }}
        />
        {/* <Route
     exact
     path="/gamesJoined"
     render={props => {
      return (
       <GamesJoinedList
        {...props}
        deleteGameJoined={this.deleteGameJoined}
        gamesJoined={this.state.gamesJoined}
       />
      );
     }}
    />
    <Route
     path="/gamesJoined/:gameJoinedId(\d+)"
     render={props => {
      return (
       <GameJoinedDetail
        {...props}
        deleteGameJoined={this.deleteGameJoined}
        gamesJoined={this.state.gamesJoined}
       />
      );
     }}
    />
    <Route
     path="/gamesJoined/join"
     render={props => {
      return (
       <GamesList
        {...props}
        joinGame={this.joinGame}
        users={this.state.users}
       />
      );
     }}
    /> */}
        {/* <Route
          exact
          path="/users"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <UsersList
                  deleteUser={this.deleteUser}
                  games={this.state.games}
                  gamesJoined={this.state.gamesJoined}
                  courts={this.state.courts}
                />
              );
            } else {
              return <Redirect to="/Login" />;
            }
          }}
        /> */}
      </React.Fragment>
    );
  }
}
