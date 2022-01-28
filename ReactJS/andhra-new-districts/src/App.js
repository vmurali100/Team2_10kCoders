import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Searchbox } from './components/Searchbox';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
