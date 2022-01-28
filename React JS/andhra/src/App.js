
import "./App.css";
import { DistrictDetails } from "./Components/DistrictDetails";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Routes, Route, Link } from "react-router-dom";
import { NavComp } from './Components/NavComp';
import { AdminLogin } from "./Components/AdminLogin";

function App() {
 
  return (
    <div>
     
      <NavComp/>
      <div className="container">
        <Routes>
          <Route path="" element={<DistrictDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<AdminLogin />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
