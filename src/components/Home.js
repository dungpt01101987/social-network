// ListPosts.js
import React from 'react';
import { ListGroup, Card, Image } from 'react-bootstrap';

const postsData = [
    {
        id: 1,
        author: 'John Doe',
        postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: 15,
        comments: 5,
    },
    {
        id: 2,
        author: 'Jane Smith',
        postText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        likes: 20,
        comments: 10,
    },
    // Thêm các bài viết khác tại đây
];

const Home = () => {
    return (
        <div className='home-container'>
            <ListGroup>
                {postsData.map((post) => (
                    <Card key={post.id} className='item-post'>
                        <Card.Body>
                            <Card.Title>{post.author}</Card.Title>
                            <Card.Text>{post.postText}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Image
                                src="https://placekitten.com/40/40"
                                roundedCircle
                                className="mr-2"
                            />
                            <span className="mr-2">{post.likes} Likes</span>
                            <span>{post.comments} Comments</span>
                        </Card.Footer>
                    </Card>
                ))}
            </ListGroup>
        </div>

    );
};

export default Home;
