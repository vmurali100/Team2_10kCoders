import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar, { ContactHeader, Content, Footer } from './Components/Navbar';
import Home from './Components/Home';
import EmailVerification from './Components/EmailVerification';
import EntryPage from './Components/EntryPage';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContactHeader/>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="emailVerification" element={<EmailVerification/>}/>
        <Route path="login/entrypage" element={<EntryPage/>}/>
        <Route path="profile" element={<Profile/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
