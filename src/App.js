import './App.scss';

import Home from './components/Home';
import Users from './components/Users';
import FormLogin from './components/FormLogin';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormLogout from './components/FormLogout';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<FormLogin />} />
        <Route path='/logout' element={<FormLogout />} />
      </Routes>
      <ToastContainer />
    </div >

  );
}

export default App;
