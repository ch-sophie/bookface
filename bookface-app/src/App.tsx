import React from 'react';
import logo from './icons/logo.svg';
import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Header from './components/header'
import TestComponent from './components/testComponent'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hall from './components/hall'
import Floor from './components/floor'


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path='signIn' element={<SignIn />} />
      <Route path='hall' element={<Hall />} />
      <Route path='floor' element={<Floor />} />
    </Routes>
  );
}

export default App;
