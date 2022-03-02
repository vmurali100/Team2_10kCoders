import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { EmailVerification } from './Components/EmailVerification';
import { ErrorPage } from './Components/ErrorPage';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Login from './Components/Login';
import { Profile } from './Components/Profile';
import Register from './Components/Register';
import { UserDashboard } from './Components/UserDashboard';

function App() {


  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
