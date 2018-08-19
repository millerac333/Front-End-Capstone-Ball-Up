import React, { Component } from "react";
import CourtsManager from "../../modules/CourtsManager";

export default class CourtForm extends Component {
  state = {
    nameCourt: "",
    address: "",
    hours: "",
    typeCourt: ""
  };

  handleFieldChange = e => {
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;
    this.setState(stateToChange);
  };

  addCourt = e => {
    e.preventDefault();
    const location = {
      nameCourt: this.state.courtName,
      address: this.state.address,
      hours: this.state.hours,
      typeCourt: this.state.courtType
    };
    CourtsManager.add(location).then(() => {
      this.props.history.push("/locations");
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addCourt} className="court-form">
          <div>
            <label> Court's Name:</label>
            <input
              type="text"
              placeholder="name"
              required="true"
              className="court-name"
              onChange={this.handleFieldChange}
              id="courtName"
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              placeholder="address"
              required="true"
              className="court-address"
              onChange={this.handleFieldChange}
              id="address"
            />
          </div>
          <div>
            <label>Hours of Operation:</label>
            <input
              type="text"
              placeholder="EX: 24hr OR 8AM-8PM"
              required="true"
              className="court-hours"
              onChange={this.handleFieldChange}
              id="hours"
            />
          </div>
          <div>
            <label>Select:</label>
            <select
              type="text"
              placeholder="Outdoor"
              required="true"
              className="court-courtType"
              onChange={this.handleFieldChange}
              id="courtType"
            >
              <option>Outdoor</option>
              <option>Indoor/Gym</option>
            </select>
          </div>
          <div>
            <button type="submit">Add Court</button>
          </div>
          {/* <Button isLink={this.props.history.push("/courts/")}>Cancel</Button> */}
        </form>
      </React.Fragment>
    );
  }
}
