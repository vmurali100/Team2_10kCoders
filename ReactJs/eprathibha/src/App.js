import logo from './logo.svg';
import './App.css';
import{Routes,Route, Link, BrowserRouter} from 'react-router-dom'
import Registration from './components/Registration';
import Emailverification from './components/Emailverification';
import Login from './components/Login';
import Startexam from './components/Startexam';
import Tokendata from './components/Tokendata';
import Questionpaper from './components/Questionpaper';
import Question from './components/Question';
import Finishexam from './components/Finishexam';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">

<Routes forceRefresh={true}>
<Route path="/" element={<Login/>}/>

<Route path="login" element={<Login/>}/>
<Route path="registration" element={<Registration/>}/>
<Route path="emailverification" element={<Emailverification/>}/>
<Route path="tokendata" element={<Tokendata/>}/>
<Route path="startexam" element={<Startexam/>}/>
<Route path="questionpaper" element={<Questionpaper/>}/>
<Route path="question" element={<Question/>}/>
<Route path="finish" element={<Finishexam/>}/>
<Route path="logout" element={<Logout/>}/>




</Routes>
    </div>

  );
}

export default App;
