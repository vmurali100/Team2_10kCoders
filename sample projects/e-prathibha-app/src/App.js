import logo from './logo.svg';
import './App.css';
import { ContactHeader, Footer, Navbar } from './Components/Navrbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Register  from './Components/Register';
import { Home } from './Components/Home';
import Emailverification from './Components/Emailverification';
import { Profile } from './Components/Profile';
import  EntryPage  from './Components/EntryPage';
import { useSelector } from 'react-redux';
import { Examslist } from './Components/Examslist';

function App() {
//  const tokendata = useSelector((state)=>state.tokendata)
  return (
    <div className="App">
   
  <BrowserRouter>
  <ContactHeader/>
  <Navbar/>
  <Routes>
    <Route path="register" element={ <Register/>} />
    <Route path="" element={<Home/>}/>
    <Route path="register/emailverify" element={<Emailverification/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="register/content" element={  <EntryPage/>}/>
    <Route path="content/examslist" element={  <Examslist/>}/>


  </Routes>
  <Footer/>
  </BrowserRouter>

    </div>
  );
}

export default App;
