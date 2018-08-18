import React, { Component } from "react";
import CourtCard from "./CourtCard";
import CourtsManager from "../../modules/CourtsManager";
import { Link } from "react-router-dom";

export default class CourtsList extends Component {
  state = {
    locations: this.props.locations,
    nameCourt: "",
    address: "",
    hours: "",
    typeCourt: ""
  };

  passCourtsList() {
    CourtsManager.all(this.props.locations).then(() => {
      this.props.history.push("/locations");
    });
  }

  render() {
    console.log("locations state after render", this.state.locations);
    return (
      <React.Fragment>
        <Link
          className="add-court"
          to={{
            pathname: "/locations/new"
          }}
        >
          Add Court
        </Link>
        <section className="locations">
          {this.props.locations.map(location => (
            <CourtCard key={location.id} location={location} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
