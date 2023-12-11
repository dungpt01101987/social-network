import { Image, NavDropdown, Navbar, Container, Nav } from 'react-bootstrap';
import logApp from '../asscets/images/logo192.png';
import { useNavigate } from 'react-router-dom';
import { getUserLoginInfo } from '../services/TableUser';
import { useEffect, useState } from 'react';
// import CheckToken from '../services/CheckToken';
import { toast } from 'react-toastify';
import UserAvatar from './UserAvatar';

const Header = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);

    const getUserInfo = async () => {
        let res = await getUserLoginInfo();
        if (res.dataError) {
            toast.error(res.dataError);
        } else {
            setUserInfo(res);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [navigate])

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
                            userInfo ?
                                (
                                    <Nav>
                                        <Nav.Link eventKey={2} href="/users">
                                            <UserAvatar avatar={userInfo.avatar} name={userInfo.lastName + " " + userInfo.firstName} />
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