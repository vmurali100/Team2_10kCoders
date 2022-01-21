import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import "./css/style.default.css";
import "./css/custom.css"
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { About } from "./About";
// import { Home } from "./Home";
// import { Users } from "./Users"

function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Header/>
<Slider/>
<About/>
    <Routes>
    <Route path="expertise" element={<Expertise/>}/>
    <Route path="education" element={<Education/>}/>
    <Route path="experience" element={<Experience/>}/>
    <Route path="contact" element={<Contact/>}/>


      
</Routes>
<Footer/>

 </BrowserRouter>
    </div>
  );
}

export default App;
