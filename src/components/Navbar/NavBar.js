import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from 'react-bootstrap/Form';
import Offcanvas from "react-bootstrap/Offcanvas";
import Signup from "../Signup/Signup";
import "./NavBar.css";

function NavBar() {
  const [view, setView] = useState(false);
  const [fix, setFix] = useState(false);

  const fixSidebar =()=>{
    if(window.scrollY > 0){
      setFix(true);
    }
    else{
      setFix(false);
    }
  }
  window.addEventListener('scroll', fixSidebar);
  const handleView = () => setView(false);
  const handleClick = () => setView(true);
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar sticky="top" key={expand} expand={expand} className={fix ? 'navBar fixed mb-5 background d-flex justify-content-center align-items-center' : 'navBar mb-5 background d-flex justify-content-center align-items-center'}>
          <Container fluid>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Walton Eservice
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-center align-items-center flex-grow-1 pe-2">
                  <Nav.Link
                    activeClassName="menu-active"
                    className="hover-main type2"
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    activeClassName="menu-active"
                    className="hover-main type2"
                    href="/android"
                  >
                    Android Apps
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/web">
                    Web Apps
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/print">
                    Printing Apps
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/display">
                    Display Apps
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/test">
                    On Test
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/notice">
                    Notice IT
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/requisition">
                    Requisition Form
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/migration">
                    Migration
                  </Nav.Link>
                  <Form className="d-flex hover-main ">
                  <input type="search" name="search" placeholder="Search.."/>
                    </Form>
                    <Nav.Link
                    className="hover-main float-end type2"
                    href="#"
                    onClick={handleClick}
                  >
                    Log in
                  </Nav.Link>
                </Nav>
                

                {/* <Nav className="justify-content-end flex-grow-1 pe-2">
                  <Nav.Link
                    className="hover-main type2"
                    href="#"
                    onClick={handleClick}
                  >
                    Log in
                  </Nav.Link>
                </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Signup
        handleShow={handleClick}
        handleView={handleView}
        view={view}
      ></Signup>
    </>
  );
}

export default NavBar;
