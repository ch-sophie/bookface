import React from 'react';
import './App.css';
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hall from './components/hall'
import Floor from './components/floor'
import Profile from './components/Userprofile/ProfilePage';
import Register from './pages/Register';
import Login from './pages/login';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="Register" element={<Register />} />
      <Route path='Login' element={<Login />} />
      <Route path='hall' element={<Hall />} />
      <Route path='floor' element={<Floor />} />
      <Route path='profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
