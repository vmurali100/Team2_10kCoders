import logo from './logo.svg';
import './App.css';
import Districts from './Components/Districts';
import { Routes, Route } from "react-router-dom"
import { LogIn } from './Components/LogIn';
import { Navcomp } from './Components/Navcomp';
import { Register } from './Components/Register';
import { Admin } from './Components/Admin';
import { DistrictDetails } from './Components/DistrictDetails';



function App() {
  return (
    <div>
      <Navcomp />
      <div className="App">
        <Routes>
          <Route path="" element={<DistrictDetails/>} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />
          <Route path="districts" element={<Districts/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
