import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import xyzLogo from "../assets/xyz-logo.svg"
import SearchForm from './SearchForm.component';
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import Styled from './styled-css'

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={xyzLogo}></img>
        </Navbar.Brand>
        <Navbar.Collapse style={{width: 'auto'}}>
          <SearchForm />
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Rent Textbooks</Nav.Link>
            <Nav.Link href="#link">Buy Textbooks</Nav.Link>
            <Nav.Link href="#link">Sell Textbooks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse style={{justifyContent: 'space-around'}}>
          <Dropdown>
            <Styled.ClearDropdownButton variant="success" id="dropdown-basic">
              &#127760; EN
            </Styled.ClearDropdownButton>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SP</Dropdown.Item>
              <Dropdown.Item href="#/action-3">RU</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button>Contact Us</Button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;