import logo from './logo.svg';
import './App.css';
import { Users } from './JSON/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

       <Route path="/user" element={<Users/>}> </Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
