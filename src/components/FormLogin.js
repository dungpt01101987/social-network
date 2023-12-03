// FormLogin.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Xử lý đăng nhập tại đây
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Form className='form-login'>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleLogin}>
                Login
            </Button>
        </Form>
    );
};

export default FormLogin;
