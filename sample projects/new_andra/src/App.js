import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Bar, Login } from './Components/Login';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { SignUp } from './Components/Signup';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
 
     <Routes>
     <Route path="" element = {<Bar/> &&<Home/>}/>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<SignUp/>}/>
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
