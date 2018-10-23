import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React, { Component } from 'react';

const MainNav = (props) => {
  return(

    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        About
      </NavItem>
      <NavDropdown eventKey={3} title="Payments" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
      <NavDropdown eventKey={3} title="Transfers" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
      <NavDropdown eventKey={3} title="Manage Accounts" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>History & Transactions</MenuItem>
        <MenuItem eventKey={3.2}>Profile Details</MenuItem>
        <MenuItem eventKey={3.3}>Statements</MenuItem>
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};
export default MainNav;
// oh shit
