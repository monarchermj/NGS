import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Tabs"></Tab>
          <Tab eventKey="profile" title="Image">
            <img
              src="https://wallpapercave.com/wp/wp6921036.jpg"
              height="400px"
            ></img>
          </Tab>
          <Tab eventKey="disabled" title="Blank" disabled></Tab>
        </Tabs>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Pills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Blank
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default About;
