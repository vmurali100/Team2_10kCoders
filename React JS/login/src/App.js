import logo from './logo.svg';
import './App.css';
import Form from './redux/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserDetails } from './redux/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/form' element={ <Form/>}/>
        <Route path="/form/userdetails" element={<UserDetails/>}/>
       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App; 
