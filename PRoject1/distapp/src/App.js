import logo from './logo.svg';
import './App.css';
import { DistrictDetails } from './DistrictDetails';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Routes, Route, Link } from "react-router-dom"
import React,{useEffect} from 'react';
import { NavComp } from './Components/NavComp';
import { Admin } from './Components/Admin';
import {AdminDataPage} from './Components/AdminDataPage'
import { EnteringNewDetails } from './Components/EnteringNewDetails';
import {AdminDataPage1} from "./Components/AdminDataPage1"
 function App() {

  return (
    <div>
     <NavComp />
      <div className='container'>
        <Routes>
          <Route path="" element={<DistrictDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin"  element ={<Admin/>} />
          <Route path="admindatapage" element={<AdminDataPage/>} />
          <Route path="admindatapage1" element={<AdminDataPage1/>} />
          <Route path="enterNewDetais" element={<EnteringNewDetails/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
