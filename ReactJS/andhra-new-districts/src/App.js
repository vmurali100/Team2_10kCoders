import './App.css';
import { Home } from './components/Home';
import { Searchbox } from './components/Searchbox';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useState } from 'react';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { EditDistrict } from './components/EditDistrict';
import { AddDistrict } from './components/AddDistrict';
import { DeleteDistrict } from './components/DeleteDistrict';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  localStorage.setItem("isUserLoggedIn",JSON.stringify(loggedIn));
  localStorage.setItem("isAdminLoggedIn",JSON.stringify(adminLoggedIn))
  return (
    <div >
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} />
      <Routes>
          <Route path="" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin adminLoggedIn={adminLoggedIn} setAdminLoggedIn={setAdminLoggedIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin-dashboard/edit-district/:id" element={<EditDistrict />}/>
          <Route path="/admin-dashboard/add-district" element={<AddDistrict />}/>
          <Route path="/admin-dashboard/delete-district/:id" element={<DeleteDistrict />}/>
      </Routes>
    </div>
  );
}

export default App;
