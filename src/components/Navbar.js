import CartWidget from "./CartWidget";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar = () => {

    return (
      <div className="navbarContainer">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
                <h1>Navbar</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Products</Nav.Link>
                <NavDropdown title="Options" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Category 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                   Category 3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <CartWidget />
      </div>
    );
    
}

export default NavBar;