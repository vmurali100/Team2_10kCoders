import './App.css';
import  Loginform  from './Components/Loginform';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Nav />
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/login" element={<Loginform />}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
