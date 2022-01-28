import logo from './logo.svg';
import './App.css';
import { DistrictDetails } from './DistrictDetails';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Routes, Route, Link } from "react-router-dom"
import React,{useEffect} from 'react';
import { NavComp } from './Components/NavComp';

function App() {

  return (
    <div>
     <NavComp />
      <div className='container'>
        <Routes>
          <Route path="" element={<DistrictDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
