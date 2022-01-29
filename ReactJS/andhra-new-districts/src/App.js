import './App.css';
import { Home } from './components/Home';
import { Searchbox } from './components/Searchbox';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div >
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
          <Route path="" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
