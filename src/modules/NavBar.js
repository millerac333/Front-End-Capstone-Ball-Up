import { Navbar, NavbarItem } from "bloomer";
import React, { Component } from "react";

export default class BallUpNavBar extends Component {
  render() {
    return (
      <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
        <NavbarItem href="/games?_expand=location">Game List</NavbarItem>
        <NavbarItem href="/games/new">Add Game</NavbarItem>
        <NavbarItem href="/locations">Courts List</NavbarItem>
        <NavbarItem href="/locations/new">Add Court</NavbarItem>
        <NavbarItem>
          {/* <Control>
            <Button id="logout" target="_blank">
              <span>Logout</span>
            </Button>
          </Control> */}
        </NavbarItem>
      </Navbar>
    );
  }
}
