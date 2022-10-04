import React from 'react';
import './App.css';
// import SignUp from './components/signUp';
// import SignIn from './components/signIn';
// import Header from './components/header'
// import TestComponent from './components/testComponent'
// import Editprofile from './components/Editprofile';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hall from './components/hall'
import Floor from './components/floor'
// import Profile from './components/Profile';
// import Test from './components/testComponent';
import Register from './pages/Register';
import Login from './pages/login';


function App() {
  return (

    <Routes>
      <Route path="/" element={<Hall />} />
      <Route path="Register" element={<Register />} />
      <Route path='Login' element={<Login />} />
      <Route path='hall' element={<Hall />} />
      <Route path='floor' element={<Floor />} />
      {/* <Route path='profile' element={<ProfilePage />} /> */}
    </Routes>
  );
}

export default App;
