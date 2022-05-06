import React from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import "./Navbar.css"
const NavbarMenu = () => {
  return (
    <div>
    <Navbar className='topnav' fixed='top'>
    <Container fluid>
    <Navbar.Brand href="#home" className='text-white'>Comapny Logo</Navbar.Brand>
    <Nav className="ms-auto" >
      <Nav.Link href="#home"><i class="fas fa-sun"></i></Nav.Link>
      <Nav.Link href="#features"><i className="fas fa-life-ring"></i></Nav.Link>
      <Nav.Link href="#pricing"><i className="fas fa-cog"></i></Nav.Link>
      <Nav><Dropdown>
  <Dropdown.Toggle variant="secondry" id="dropdown-basic" className='text-white'>
   user@exampl.com
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Nav>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavbarMenu