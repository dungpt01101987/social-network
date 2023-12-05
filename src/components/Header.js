import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                            <Nav.Link href="/users" eventKey="/users">User Management</Nav.Link>
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
                            <Nav.Link href="/login" eventKey="/login">Log in</Nav.Link>
                            <Nav.Link href="/logout" eventKey="/logout">Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;