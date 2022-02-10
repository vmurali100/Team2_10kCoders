import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar, { Footer } from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
