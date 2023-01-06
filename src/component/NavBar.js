import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand>Neon Code</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Neon Code
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-1">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#service">Service</Nav.Link>
                  <Nav.Link href="#portofolio">Portofolio</Nav.Link>
                  <Nav.Link href="#team">Team</Nav.Link>
                  <Nav.Link href="#contactus">Contact Us</Nav.Link>                
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default NavBar;