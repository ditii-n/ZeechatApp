import React from 'react'
import{Nav,Navbar,Container,NavDropdown}from "react-bootstrap";
import{LinkContainer}from "react-router-bootstrap";
import Instagram from"../assets/Instagram.png";


function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer>
        <Navbar.Brand to="/">
            <img src={Instagram} style={{width:50,height:50}}/>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/Login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Chat">
            <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
        
         
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation