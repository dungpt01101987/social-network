import React from "react";
import Header from './Header';
import { Container } from 'react-bootstrap';

const Users = () => {
    return (<>
        <Header />
        <Container>
            <div className="user-container">
                <h2>User detail</h2>
            </div>
        </Container>

    </>);
}

export default Users;