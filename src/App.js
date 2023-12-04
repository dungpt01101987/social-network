import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import FormLogin from './components/FormLogin';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Container>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<FormLogin />} />
        </Routes>

      </Container>
    </div >

  );
}

export default App;
