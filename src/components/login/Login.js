import React, { Component } from "react";
import "./Login.css";
import GeneralManager from "../../modules/GeneralManager";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();
    GeneralManager.getAllData(`users?username=${this.state.username}`).then(
      user => {
        if (user.length === 0 || user[0].username !== this.state.username) {
          alert("Empty value or incorrect/unregistered Baller, try again");
          return;
        }
        if (user.length === 0 || user[0].password !== this.state.password) {
          alert("The password you entered is incorrect; please try again");
          return;
        } else if (
          user[0].username === this.state.username &&
          user[0].password === this.state.password
        ) {
          sessionStorage.setItem("currentUser", user[0].id);
          console.log(
            "currentUser id",
            user[0].id,
            "currentUserName",
            user[0].username
          );
          sessionStorage.setItem(
            "credentials",
            JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
          );
          this.props.history.push("/");
        }
      }
    );
    this.props.history.push("/");
  };

  signUpUser = e => {
    e.preventDefault();
    GeneralManager.checkData(`users?username=${this.state.username}`).then(
      user => {
        if (user.length === 0) {
          GeneralManager.postData("users", {
            username: this.state.username,
            password: this.state.password
          })
            // .then(e => e.json())
            .then(logNewUser => {
              sessionStorage.setItem("currentUser", logNewUser.id);
              console.log("logNewUser", logNewUser.id);
              sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                  username: this.state.username,
                  password: this.state.password
                })
              );
            });
          this.props.history.push("/");
        } else if (user.length > 0) {
          if (this.state.username === user[0].username) {
            alert(
              "User name is already registered or no username entered, try again"
            );
          }
          this.props.history.push("/");
        }
      }
    );
    this.props.history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <form className="loginForm">
          <h1 className="h1 mb-1 font-weight-normal">Ball-Up</h1>
          <h3 className="h3 mb-3 font-weight-normal">
            Please Log-in OR Sign-up
          </h3>
          <div className="form-group">
            <label htmlFor="username">Ballername</label>
            <input
              onChange={this.handleFieldChange}
              type="text"
              id="username"
              placeholder="Ballername"
              required=""
              autoFocus=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={e => this.handleLogin(e)}
          >
            Log-In
          </button>
          <button
            type="button"
            className="btn-warning"
            onClick={e => this.signUpUser(e)}
          >
            Sign-Up to Ball-Up
          </button>
        </form>
      </React.Fragment>
    );
  }
}
