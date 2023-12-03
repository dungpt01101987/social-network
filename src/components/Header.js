import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import logApp from '../asscets/images/logo192.png';

const Header = () => {
    // const location = useLocation();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" activeKey="/users">
                <Container>
                    <Navbar.Brand href="/">
                        <Image
                            src={logApp}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        SOCIAL NETWORK
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto" activeKey={"/users"}>
                            <Nav.Link href="/" eventKey="/">Home</Nav.Link>
                            <Nav.Link href="/users" eventKey="/users">Quản trị User</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/users">
                                <Image
                                    src="https://placekitten.com/30/30"
                                    roundedCircle
                                    className="mr-2"
                                />
                                Dũng Phạm
                            </Nav.Link>
                            <NavDropdown title="" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;