import React from "react";
import { Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

export default function Header() {
  return (
    <Row className="mb-3">
      <Col xs="12">
        <header className="header">
          <h1>Rick &amp; Morty Fan Page</h1>

          <Nav tabs className="mt-3 mb-3">
            <NavItem>
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to={{ pathname: "/characters" }}
                className="nav-link"
              >
                Characters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/locations" className="nav-link">
                Locations
              </NavLink>
            </NavItem>
          </Nav>
        </header>
      </Col>
    </Row>
  );
}
