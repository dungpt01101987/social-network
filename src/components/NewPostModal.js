import React, { useState } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const NewPostModal = ({ show, onHide, onSubmit }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleDrop = (acceptedFiles) => {
    // Xử lý logic để chọn và lưu trữ nhiều ảnh
    setSelectedImages([...selectedImages, ...acceptedFiles]);
  };

  const handleFormSubmit = () => {
    onSubmit({ postContent, selectedImages });
    onHide(); // Đóng modal sau khi submit
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create a New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="postContent">
            <Form.Control
              as="textarea"
              placeholder="What's on your mind?"
              value={postContent}
              onChange={handleContentChange}
            />
          </Form.Group>
          <Form.Group controlId="postImages">
            <Dropzone onDrop={handleDrop} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', marginTop: '10px' }}>
                  <input {...getInputProps()} />
                  <p>Drop images here, or click to select images</p>
                </div>
              )}
            </Dropzone>
            {selectedImages.map((image, index) => (
              <Image key={index} src={URL.createObjectURL(image)} rounded style={{ marginTop: '10px', marginRight: '10px', height: '100px', width: '100px' }} />
            ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleFormSubmit}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewPostModal;