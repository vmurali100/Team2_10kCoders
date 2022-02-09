import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Form from './Form';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Ap from './Ap'


function App() {
  return (
    <div >
    <BrowserRouter>
    <Header/>
    <Form/>
    <Routes>
    <Route path="/ap" element={<Ap/>}/>

    </Routes>

    </BrowserRouter>
    <Header/>
   
    </div>

  
  );
}


export default App;
