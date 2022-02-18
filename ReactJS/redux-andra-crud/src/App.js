import './App.css';
import "./index.css";
import { Header } from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useEffect, useState } from 'react';
import { AdminLogin } from './components/AdminLogin';
import  AdminDashboard  from './components/AdminDashboard';
import  EditDistrict  from './components/EditDistrict';
import  AddDistrict  from './components/AddDistrict';
import  DeleteDistrict  from './components/DeleteDistrict';
import { NotFound } from './components/NotFound';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(null)

  useEffect(()=>{
    window.onbeforeunload = () =>{
      localStorage.remove("isUserLoggedIn");
      localStorage.remove("isAdminLoggedIn");
    }
  },[])
  useEffect(()=>{
    const u = localStorage.getItem("isUserLoggedIn");
    const a = localStorage.getItem("isAdminLoggedIn")

    u && JSON.parse(u) ? setLoggedIn(true) : setLoggedIn(false);
    a && JSON.parse(a) ? setAdminLoggedIn(true) : setAdminLoggedIn(false);
  },[])

  useEffect(()=>{
    localStorage.setItem("isUserLoggedIn",loggedIn);
  },[loggedIn])

  useEffect(()=>{
    localStorage.setItem("isAdminLoggedIn",adminLoggedIn)
  },[adminLoggedIn])
    
  return (
    <div >
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} />
      <Routes>
          
            
          {
            adminLoggedIn &&
            <>
              <Route path="/admin-dashboard" element={<AdminDashboard />}/>
              <Route path="/admin-dashboard/edit-district/:id" element={<EditDistrict />}/>
              <Route path="/admin-dashboard/add-district" element={<AddDistrict />}/>
              <Route path="/admin-dashboard/delete-district/:id" element={<DeleteDistrict />}/>
              <Route path="/" element={<Navigate to={"/admin-dashboard"}/>}/>
              <Route path="/login" element={<Navigate to={"/admin-dashboard"}/>}/>
              <Route path="/register" element={<Navigate to={"/admin-dashboard"}/>}/>
              <Route path="*" element={<NotFound />}/>
          </>
          }
          
          {
            loggedIn &&
            <>
              <Route path="" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
              <Route path="*" element={<Navigate to={"/"}/>}/>
            </>
          }
          {
            ((loggedIn === false) && (adminLoggedIn === false)) &&
            <>
            <Route path="" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-login" element={<AdminLogin adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/admin-dashboard" element={<Navigate to={"/admin-login"}/>}/>
            <Route path="/admin-dashboard/add-district" element={<Navigate to={"/admin-login"}/>}/>
            <Route path="/admin-dashboard/edit-district" element={<Navigate to={"/admin-login"}/>}/>
            <Route path="/admin-dashboard/delete-district" element={<Navigate to={"/admin-login"}/>}/>
            <Route path="*" element={<NotFound />}/>
            </>
          }
          
          
          {/* <Route path="*" element={<Navigate to={ !adminLoggedIn ? "/admin-login" : "/admin-dashboard" }/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
