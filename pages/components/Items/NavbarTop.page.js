import Image from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <div>
      <div id="navbar-top">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image
                src="/Images/ArkademiLogo.png"
                width={139}
                height={25}
                alt=""
                id="navbar-logo"
              />
            </Navbar.Brand>

            <Form className="d-flex" id="search-bar">
              <Form.Control
                type="search"
                placeholder="Cari Kelas"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Link href="/" ><Image src="/Images/Like.png" width={18} height={16} alt="" /></Link>
            <div className="d-flex gap-3">
              <Button variant="light" id="navbar-button">
                Masuk
              </Button>
              <Button variant="primary" id="navbar-button">
                Daftar
              </Button>
            </div>
            <Form className="d-flex" id="search-bar-mobile">
              <Form.Control
                type="search"
                placeholder="Cari Kelas"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Container>
        </Navbar>
      </div>
      
    </div>
  );
};

export default NavbarTop;
