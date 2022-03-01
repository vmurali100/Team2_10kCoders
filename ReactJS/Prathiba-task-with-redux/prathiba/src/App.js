import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { EmailVerification } from './Components/EmailVerification';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Login from './Components/Login';
import { Profile } from './Components/Profile';
import  Register  from './Components/Register';
import { UserDashboard } from './Components/UserDashboard';

function App() {
  
  const [userLoggedIn, setIsUserLoggedIn] = useState({});
    
    useEffect(()=>{
        setIsUserLoggedIn(JSON.parse(localStorage.getItem("loginDetails")))
    },[])
    

  return (
    <div>
    <Header />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/email-verification" element={<EmailVerification/>}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </div> 
  ); 
}

export default App;
