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
import { Examlist } from './Components/Examlist';
import { Startexam } from './Components/Startexam';
import { FinishExam } from './Components/FinishExam';

function App() 
{
  
  return (
    <div>
      <Header />
      <Routes>
        
            <Route path="/profile" element={<Profile />} />
            <Route path="/exam-list" element={<Examlist />} />
            <Route path="/start-exam/:id" element={<Startexam/>} />
            <Route path="/finish-exam/:id" element={<FinishExam/>} />
         
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/email-verification" element={<EmailVerification />} />
          
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
