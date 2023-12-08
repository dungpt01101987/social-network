// ListPosts.js
import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getTimeLine } from '../services/TablePost';
import { Card, Image, ListGroup, Button } from 'react-bootstrap';
import ImageGallery from './ImageGallery';
import UserAvatar from './UserAvatar';
import NewPostModal from './NewPostModal';
import '../asscets/styles/HomePage.scss';

const ListPosts = () => {
    const [page, setPage] = useState(0);
    const [totalRows, setTotalRows] = useState(0);
    const [posts, setPosts] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = useCallback(async () => {
        const response = await getTimeLine(page);
        console.log("CHeck response >>>>", response);
        setTimeout(() => {
            const newItem = response.list_content;
            console.log("CHeck newItem >>>>", newItem);
            setPosts([...posts, ...newItem]);
            setTotalRows(response.total);
            if ((posts.length + newItem.length) >= response.total) {
                setHasMore(false);
            }
            setPage(page + 1);
        }, 1000);
    }, [page, posts]);

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    const handleCreatePost = (postContent) => {
        // Xử lý logic để tạo mới bài viết với nội dung postContent
        console.log('New Post Content:', postContent);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='home-container'>
            <div className='btn-create-new-post'>
                <Button variant="primary" onClick={handleShowModal}>
                    Create New Post
                </Button>

                <NewPostModal
                    show={showModal}
                    onHide={handleHideModal}
                    onSubmit={handleCreatePost}
                />
            </div>
            <ListGroup>
                <InfiniteScroll
                    loader={<p>loading...</p>}
                    fetchMore={() => setPage((prev) => prev + 1)}
                    hasMore={hasMore}
                    dataLength={totalRows}
                    endMessage={<p>You have seen it all</p>}
                    next={fetchData}
                >
                    {posts.map((item, index) => (
                        <Card key={item.post_content.postId} className='item-post'>
                            <Card.Body>
                                <Card.Title>
                                    <UserAvatar avatar={item.user_avatar} name={item.user_post} />
                                </Card.Title>
                                <Card.Text>{item.post_content.contentText}</Card.Text>
                                {
                                    <ImageGallery images={item.post_content.images} />
                                }
                            </Card.Body>
                            <Card.Footer>
                                <Image
                                    src="https://placekitten.com/40/40"
                                    roundedCircle
                                    className="mr-2"
                                />
                                <span className="mr-2"> {item.total_like} Likes - </span>
                                <span>{item.total_comment} Comments</span>
                            </Card.Footer>
                        </Card>
                    ))}
                </InfiniteScroll>
            </ListGroup>
        </div>
    );
};

export default ListPosts;
