import React, { Component } from "react";
import GamesManager from "../../modules/GamesManager";
// import CourtsManager from "../../modules/CourtsManager";

export default class GameForm extends Component {
  state = {
    userId: "",
    joinedUserId: "",
    locationId: "",
    duration: "",
    courtSize: "",
    id: ""
  };

  componentDidMount() {
    let userGames = sessionStorage.getItem("currentUser");
    this.setState({ userId: userGames });
    console.log("new user id state", typeof userGames);
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  addGame = e => {
    e.preventDefault();
    const game = {
      userId: this.state.userId,
      joinedUserId: this.state.joinedUserId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize
    };

    GamesManager.add(game).then(() => {
      this.props.history.push("/games");
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.state.handleUpdate}>
          <div>
            <label>Choose Court Location:</label>
            <select
              type="option"
              value={this.state.locationId}
              required="true"
              className="game-location"
              onChange={this.handleFieldChange}
              id="locationId"
            >
              {this.props.locations.map(e => (
                <option key={e.id} value={e.id}>
                  {e.nameCourt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              required="true"
              className="game-joinedUsers"
              onChange={this.handleFieldChange}
              id="joinedBallerId"
              value={this.state.joinedUserId}
            >
              <option>0</option>
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
          <div>
            <label>Duration of Game:</label>
            <input
              type="EX:12PM-2PM"
              required="true"
              className="game-duration"
              onChange={this.handleFieldChange}
              id="duration"
              value={this.state.duration}
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="option"
              value={this.state.courtSize}
              required="true"
              className="game-courtSize"
              onChange={this.handleFieldChange}
              id="courtSize"
            >
              <option>Full-court</option>
              <option>Half-court</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={this.addGame}>
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
