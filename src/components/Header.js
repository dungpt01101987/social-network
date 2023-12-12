import { Image, NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';
import logApp from '../asscets/images/logo192.png';
import UserAvatar from './UserAvatar';

const Header = () => {
    const username = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");

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
                        {
                            username ?
                                (
                                    <Nav>
                                        <Nav.Link eventKey={2} href="/users">
                                            <UserAvatar avatar={avatar ? avatar : null} name={username} />
                                        </Nav.Link>
                                        <NavDropdown title="" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                )
                                :
                                (
                                    <></>
                                )
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;