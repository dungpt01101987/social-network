// ListPosts.js
import React from 'react';
import { ListGroup, Card, Image, Badge } from 'react-bootstrap';

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

const ListPosts = () => {
    return (
        <ListGroup>
            {postsData.map((post) => (
                <ListGroup.Item key={post.id}>
                    <Card>
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
                            <Badge variant="secondary" className="ml-auto">#React #Bootstrap</Badge>
                        </Card.Footer>
                    </Card>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ListPosts;
