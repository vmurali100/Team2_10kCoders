import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import "./css/style.default.css" ;
import "./css/custom.css" ; 
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Home } from './Home';
import { Expertise } from './Expertise';
import { Education } from './Education';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { About } from './About';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Home/>
     {/* <About/>
     <Expertise/>
     <Education />
     <Experiance/>
     <Contact/> */}
   
    
     <Routes>
       {/* <Route path="" element={<Home/>} /> */}
       <Route path="home" element={!<Home/> ? <Home/> : "" }/>
       <Route path="about" element={<About/>} />
       <Route path="expertise" element={<Expertise/>} />
       <Route path="education" element={<Education/>} />
       <Route path="experience" element={<Experience/>} />
       <Route path="contact" element={<Contact/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;