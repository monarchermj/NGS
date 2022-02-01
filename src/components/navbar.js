import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import About from "./about";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>NEGSAT</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div>
        <Routes>
          <Route path="/home"element={<Home />}></Route>
          <Route path="/register"element={<Register />}></Route>
          <Route path="/about"element={<About />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;
