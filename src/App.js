import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import ProgressBarComponent from './components/ProgressBarComponent';
import ListPosts from './components/ListPosts';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <header>
            <Header />
          </header>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <nav>
            <h2>Navigation</h2>
            <ProgressBarComponent />
          </nav>
        </Col>

        <Col md={9}>
          <main>
            <h2>Main Content</h2>
            <ListPosts />
          </main>
        </Col>
      </Row>

      <Row>
        <Col>
          <footer>
            <h3>Footer</h3>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
