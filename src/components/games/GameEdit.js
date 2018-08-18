import React, { Component } from "react";
import GeneralManager from "../../modules/GeneralManager";

export default class EditGame extends Component {
  state = {
    userId: this.props.games.userId,
    joinedUserId: this.props.games.joinedUserId,
    locationId: this.props.games.locationId,
    duration: this.props.games.duration,
    courtSize: this.props.games.courtSize,
    locations: this.props.locations,
    nameCourt: this.props.locations.nameCourt
  };

  componentDidMount() {
    let userGames = sessionStorage.getItem("currentUser");
    this.setState({ userId: userGames });
    console.log("new user id state", typeof userGames);
  }

  // Update state whenever an input field is edited
  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  handleUpdate = e => {
    e.preventDefault();
    const updatedGame = {
      userId: this.state.userId,
      joinedUserId: this.state.joinedUserId,
      locationId: this.state.locationId,
      duration: this.state.duration,
      courtSize: this.state.courtSize
    };

    GeneralManager.patchData("games", this.props.games.id, updatedGame).then(
      () => this.props.history.push("/games")
    );
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleUpdate}>
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
              className="game-edit-location"
              onChange={this.handleFieldChange}
              id="joinedUserId"
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
              className="game-edit-duration"
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
              className="game-edit-courtSize"
              onChange={this.handleFieldChange}
              id="courtSize"
            >
              <option>Full-court</option>
              <option>Half-court</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
