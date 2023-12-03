import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Container>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        {/* <Row>
          <Col>
            <header>
              <Header />
            </header>
          </Col>
        </Row>

        <Row>
          <main>
            <Router>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<Users />} />
            </Router>
            <Home />
          </main>
        </Row> */}
        {/* <Row>
          <Col>
            <footer>
              <h3>Footer</h3>
            </footer>
          </Col>
        </Row> */}
      </Container>
    </div >

  );
}

export default App;
