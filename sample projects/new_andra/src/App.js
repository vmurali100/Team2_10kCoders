import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import {BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <BrowserRouter>
 
     <Routes>
       <Route path="/login" element = {<Login/>}/>
       <Route path="" element = {<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
