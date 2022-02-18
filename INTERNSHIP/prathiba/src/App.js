import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavComp } from './Components/NavComp';
import { HomePage } from './Components/HomePage';
import { Login } from './Components/Login-Register';
import { Footer } from './Components/Footer';
import {axios} from 'axios'
 

function App() {
  return (
    <div className="App">
      <NavComp/>
    <Routes>
    <Route path="" element={<Login/>}></Route> 
      <Route path='homepage' element={<HomePage />}></Route>
    </Routes>
    <Footer />
 
    </div>
  );
}

export default App;
