import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./HOME.jsx";
import Settings from "./Settings";
import Myprofile from "./Myprofile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/" >Home</Link> <br/>
      <Link to="/settings" >Settings</Link> <br/>
      <Link to="/myprofile" >Myprofile</Link>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="settings" element={<Settings />} />

          <Route path="myprofile" element={<Myprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
