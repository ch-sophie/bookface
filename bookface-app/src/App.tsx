import React from 'react';
import './App.css';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Header from './components/header'
import TestComponent from './components/testComponent'
import Editprofile from './components/Editprofile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hall from './components/hall'
import Floor from './components/floor'
import Test from './components/testComponent';
import ProfilePage from './components/Userprofile/ProfilePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path='signIn' element={<SignIn />} />
      <Route path='hall' element={<Hall />} />
      <Route path='floor' element={<Floor />} />
      <Route path='profile' element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
