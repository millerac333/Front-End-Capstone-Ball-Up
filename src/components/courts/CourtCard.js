import React, { Component } from "react";

export default class CourtCard extends Component {
  state = {
    locations: this.props.location
  };

  render() {
    return (
      <React.Fragment>
        <div key={this.props.location.id} className="courts-card">
          <div className="courts-card-body">
            <h5 className="courts-card-name">
              {this.props.location.nameCourt}
            </h5>
            <div className="courts-card-address">
              <label htmlFor="courts-card-address">Address</label>
              {this.props.location.address}
            </div>
            <div className="courts-card-hours">
              <label htmlFor="courts-card-hours">Hours of Operation</label>
              {this.props.location.hours}
            </div>
            <div className="courts-card-courtType">
              <label htmlFor="courts-card-courtType">Court Type</label>
              {this.props.location.typeCourt ? "Outdoor" : "Indoor/Gym"}
              {/* onClick={() => this.props.addGame(this.props.courts.id)} */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
