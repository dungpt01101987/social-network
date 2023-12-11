import './App.scss';
import Home from './components/Home';
import Users from './components/Users';
import FormLogin from './components/FormLogin';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormLogout from './components/FormLogout';
import ForgotPassword from './components/ForgotPassword';
import PageError from './components/PageError';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <div className='app-container' >
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<FormLogin />} />
        <Route path='/logout' element={<FormLogout />} />
        <Route path='/change-password' element={<ForgotPassword />} />
        <Route path='/register' element={<CreateAccount />} />
        <Route path='/error' element={<PageError />} />

      </Routes>
      <ToastContainer />
    </div >

  );
}

export default App;
