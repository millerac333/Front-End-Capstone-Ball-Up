import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import "./BallUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BallUpNavBar from "../modules/NavBar";

export default class BallUp extends Component {
  render() {
    return (
      <React.Fragment>
        <BallUpNavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}
