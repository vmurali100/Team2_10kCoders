import logo from './logo.svg';
import './App.css';
// import { Districts } from './districts';
import { Register } from './components/register';
import{Routes,Route, Link} from 'react-router-dom'
import { Login } from './components/login';
import { useEffect } from 'react';
import { Navcomp } from './components/Navcomp';
import { Admin } from './components/Admin';
import District_redux from './district_redux';

function App() {

  return (
    <div className="App">
      <District_redux/>
      {/* <Navcomp/>
     <div className="container">
<Routes>
<Route path="" element={<Districts/>}/>

  <Route path="login" element={<Login/>}/>
  <Route path="register" element={<Register/>}/>
  <Route path="admin" element={<Admin/>}/>



</Routes>
     </div> */}

    </div>

  )
}

export default App;
