import logo from './logo.svg';
import './App.css';
import { ContactHeader, Footer, Navbar } from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
   
  <BrowserRouter>
  <ContactHeader/>
  <Navbar/>
  <Routes>
    <Route path="register" element={ <Login/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;