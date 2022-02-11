import logo from './logo.svg'; 
import './App.css';
import { Signup } from './Components/Signup';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Contact } from './Components/Contact';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { Fooditems } from './Components/Fooditems';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Home/>
  {/* <Signup/> */}
  <Routes>
    {/* <Route path = "/" element = { <Home/>  } />  */}
    <Route path = "/home" element = { ! <Home/>  ? <Home/> : "" } /> 
    <Route path = "/signup" element = {<Signup/>} />
    <Route path = "/login" element = {<Login/>} />
     {/* <Route path = "/users" element = {<Users/>} /> */}
    <Route path = "/fooditems" element = {<Fooditems/>} />
    <Route path = "/contact" element = {<Contact/>} />

   
  </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
