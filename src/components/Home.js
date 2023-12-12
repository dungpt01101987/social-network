// ListPosts.js
import React from 'react';
import { useEffect } from 'react';
import CheckToken from '../services/CheckToken';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ListPosts from './ListPosts';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!CheckToken()) {
            navigate("/login");
        }
    }, [navigate])
    return (
        <>
            <Header />
            <Container>
                <ListPosts />
            </Container>
        </>


    );
};

export default Home;
