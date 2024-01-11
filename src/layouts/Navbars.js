import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbars = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
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
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/event">Event</Nav.Link>
              {/* <Nav.Link href="/venue">Venue</Nav.Link>
              <Nav.Link href="/performer">Performers</Nav.Link> */}
              <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/">
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
