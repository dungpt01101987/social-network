// ListPosts.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import ListPosts from './ListPosts';

const Home = () => {
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
