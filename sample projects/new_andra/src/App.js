import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {  Login } from './Components/Login';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import { SignUp } from './Components/Signup';
import { Bar } from './Components/Bar';
import { Admin, AdminDash, Admindashboard } from './Components/Admin';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
    
     <Bar/> 
     <Routes>
     <Route path="" element = {<><Admin/> <Home/></> } /> 
     {/* <Route path="" /> */}
       <Route path="/login" element = {<Login/>}/>
       <Route path="/register" element = {<SignUp/>}/>
       <Route path="/admin" element = {<AdminDash/>}/>
       <Route path="/admindashboard" element = {<Admindashboard/>}/>


    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
