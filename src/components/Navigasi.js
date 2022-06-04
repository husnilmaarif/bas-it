import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navigasi() {
  const [google, setGoogle] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setGoogle(user.displayName);
      }
    });
  });

  return (
    <Navbar bg="white" expand="sm" className="shadow">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="EXPLORE" className="me-2 text-dark mt-1 link">
              <NavDropdown.Item>
                <Link to="/methodology" className="link">
                  METHODOLOGY
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/valuation" className="link">
                  VALUATION REPORT
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/data" className="link">
                  DATA SOURCES
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="me-2">
              <Link to="/support" className="link">
                SUPPORT
              </Link>
            </Nav.Link>
            <Nav.Link className="me-2">
              <Link to="/pricing" className="link">
                PRICING
              </Link>
            </Nav.Link>
            <Button className="me-2" variant="info" size="sm" id="button-buy">
              <Link to="/buy" className="link text-light">
                BUY NOW
              </Link>
            </Button>
            <Nav.Link>
              <Link to="/login" className="link">
                <PersonIcon className="me-2" /> {google}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
