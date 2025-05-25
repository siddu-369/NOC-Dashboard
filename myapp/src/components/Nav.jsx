import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DateTime } from "luxon"; // ← Luxon for time
import { Link, useNavigate } from "react-router-dom";
import WM from "../assets/WM_Logo.png";

function NavbarComponent() {
  const navigate = useNavigate();
  const [ctTime, setCtTime] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now().setZone("America/Chicago");
      setCtTime(now.toFormat("hh:mm:ss a"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <img
            alt="Logo"
            src={WM}
            className="d-inline-block align-top nav-logo"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* CT Time Display */}
            <span
              className="ms-3 text-muted fw-bold m-3 pt-1"
              style={{ fontSize: "0.95rem" }}
            >
              CT Time: {ctTime}
            </span>
            {/* Links */}
            <Nav.Link as={Link} to="/myapps">
              My Apps
            </Nav.Link>
            <Nav.Link as={Link} to="/conditionGenerator">
              Condition
            </Nav.Link>

            {/* Dropdown Menu */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/todos">
                Todos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/notes">
                Notes
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/clocks">
                Clocks
              </NavDropdown.Item> */}

              {/* <NavDropdown.Item className="disabled" as={Link} to="/difyAI">
                Dify AI
              </NavDropdown.Item> */}
              <NavDropdown.Item className="" as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
