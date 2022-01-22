import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Students } from './Components/Students';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Nav } from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="" element={< Home />}></Route>
          <Route path="/students" element={< Students />}></Route>
          <Route path="/about" element={< About />}></Route>
          <Route path="/contact" element={< Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
