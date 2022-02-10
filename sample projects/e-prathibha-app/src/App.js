import logo from './logo.svg';
import './App.css';
import Navbar, { ContactHeader, Footer } from './Components/Navrbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Register  from './Components/Register';
import { Home } from './Components/Home';
import Emailverification from './Components/Emailverification';
import  Profile  from './Components/Profile';
import  EntryPage  from './Components/EntryPage';
import { useSelector } from 'react-redux';
import  Examslist  from './Components/Examslist';
import { useEffect, useState } from 'react';
import  Startexam  from './Components/Startexam';
import  Endexam  from './Components/Endexam';

function App() {
//  const tokendata = useSelector((state)=>state.tokendata)
const [loggeduser ,setLoggeduser] = useState({})
useEffect(()=>{
  setLoggeduser(JSON.parse(localStorage.getItem("loggeduser")))
},[])
  return (
    <div className="App">
   
  <BrowserRouter>
  <ContactHeader/>
  <Navbar/>
  <Routes>
     <Route path="register" element={loggeduser !=null ? "": <Register/>} />
    <Route path="" element={loggeduser !=null ? <EntryPage/> && <Home/> : <Home/>}/>
    <Route path="register/emailverify" element={<Emailverification/>}/>
    <Route path="/profile" element={<Profile/>}/> 
   <Route path="register/content" element={  <EntryPage/>}/> 
    <Route path="/examslist" element={  <Examslist/>}/>
    <Route path="examslist/startexam" element={  <Startexam/>}/>
    <Route path="endexam" element={  <Endexam/>}/>


  </Routes>
  <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;
