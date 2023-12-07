import { Row, Col, Card } from 'react-bootstrap';

const ImageGallery = ({ images }) => {
    return (
        <Row>
            {images.map((image) => (
                <Col key={image.id} xs={10} md={5} lg={4}>
                    <Card>
                        <Card.Img variant="top" src={image.url} alt={image.name} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ImageGallery;