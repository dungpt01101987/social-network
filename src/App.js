import './App.scss';
import Home from './components/Home';
import Users from './components/Users';
import FormLogin from './components/FormLogin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormLogout from './components/FormLogout';
import ForgotPassword from './components/ForgotPassword';
import PageError from './components/PageError';
import CreateAccount from './components/CreateAccount';
import CheckToken from './services/CheckToken';

function App() {
  const isLoggedIn = CheckToken();
  return (
    <div className='app-container' >
      <Routes>
        <Route path='/' element={
          isLoggedIn ? <Home /> : <Navigate to="/login" />
        } />
        <Route path='/users' element={
          isLoggedIn ? <Users /> : <Navigate to="/login" />
        } />
        <Route path='/login' element={<FormLogin />} />
        <Route path='/change-password' element={<ForgotPassword />} />
        <Route path='/register' element={<CreateAccount />} />
        <Route path='/error' element={<PageError />} />
        <Route path='/logout' element={<FormLogout />} />
      </Routes>
      <ToastContainer />
    </div >

  );
}

export default App;
