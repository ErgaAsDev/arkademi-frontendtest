import Image from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2"
        id="navbar-button-offcanvas"
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kategori Kelas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link href="#pricing">Pengembangan Karier</Nav.Link>
          <Nav.Link href="#pricing">Sertifikasi</Nav.Link>
          <Nav.Link href="#pricing">Teknologi</Nav.Link>
          <Nav.Link href="#pricing">Bahasa</Nav.Link>
          <Nav.Link href="#pricing">Korporat</Nav.Link>
          <Nav.Link href="#pricing">Hobi</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const NavbarBottom = () => {
  return (
    <div id="navbar-bottom">
      <Navbar expand="lg" >
        <Container className="d-flex justify-content-between">
          <NavDropdown title="Kategori" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav className="d-flex" id="navbar-bottom-links">
            <ul className="d-flex mb-0">
              <li>
                <Nav.Link href="#home">Bisnis</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#features">Keuangan</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Pengembangan Karier</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Sertifikasi</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Teknologi</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Bahasa</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Korporat</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#pricing">Hobi</Nav.Link>
              </li>
            </ul>
          </Nav>

          <Nav className="mr-0">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {["bottom"].map((placement, idx) => (
                <OffCanvasExample
                  key={idx}
                  placement={placement}
                  name={placement}
                />
              ))}
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarBottom;
