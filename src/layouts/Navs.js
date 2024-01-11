import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="./images/event2.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            SnapEvent App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/login">
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/register">
                <Button
                  variant="warning"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  SignUp
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
