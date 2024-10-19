import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CollegeNavbar.css'

import navlogo from '../../assets/img/navlogo.png'

export default function CollegeNavbar(){
    return (
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="/" className="ps-5"><img src={navlogo} alt="logo" className="clgLogo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Admission</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <NavDropdown
                      title="Department"
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Computer</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Instrumentation</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Electronics and Telecommunication</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">AI & Data Science</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Humanitite & Applied Science</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Master of Computer Applications</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
    );
}