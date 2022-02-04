import logo from './logo.svg';
import './App.css';
import { ContactHeader, Footer, Navbar } from './Components/Navrbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Register  from './Components/Register';
import { Home } from './Components/Home';
import Emailverification from './Components/Emailverification';

function App() {
  return (
    <div className="App">
   
  <BrowserRouter>
  <ContactHeader/>
  <Navbar/>
  <Routes>
    <Route path="register" element={ <Register/>} />
    <Route path="" element={<Home/>}/>
    <Route path="register/emailverify" element={<Emailverification/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;
