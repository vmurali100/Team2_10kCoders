
import "./App.css";
import { DistrictDetails } from "./Components/DistrictDetails";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Routes, Route} from "react-router-dom";
import { NavComp } from './Components/NavComp';
import { AdminLogin } from "./Components/AdminLogin";
import { AddDetails } from "./Components/AddDetails";

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
          <Route path="addDistrict" element={<AddDetails />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
