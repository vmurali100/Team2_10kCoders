import React,{useEffect,useState} from 'react';

import "./App.css";
import { Distict} from "./components/Distict";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Routes, Route, Link } from "react-router-dom";
import { Nav} from './components/Nav';

function App() {
 
  return (
    <div>
     
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="" element={<Distict />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
