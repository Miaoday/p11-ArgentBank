import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccessful, logout } from './redux/actions/AuthAction.jsx';
import './App.css';

import Home from './pages/home/Home.jsx';
import Header from './layouts/header/Header.jsx';
import Footer from './layouts/footer/Footer.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Error from './pages/error/Error.jsx';

const token = localStorage.getItem('token') || sessionStorage.getItem("token");

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{    
    if (token) {
      dispatch(loginSuccessful(token));   
    } else {
      dispatch(logout());
  }
  },[dispatch]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={ <Profile />} />
          <Route path='*' element={<Error />} />
        </Routes>   
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
