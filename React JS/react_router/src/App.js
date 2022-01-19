import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { About } from './Components/About';
import { Expertise } from './Components/Expertise ';
import { Header } from './Components/Header';
import { Slider } from './Components/Slider';
import { Education } from './Components/Education';
import { Experience } from './Components/Experience';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Header />
        <Slider/>
       
        <Routes>
          <Route path="" element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
