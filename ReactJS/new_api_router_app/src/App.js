import logo from './logo.svg';
import './App.css';
import { Users } from './JSON/Users';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import { Todos } from './JSON/Todos';
import { Json_user } from './JSON/Json_users';
import { Albums } from './JSON/Albums';
import { Comments } from './JSON/Comments';
import { Photos } from './JSON/Photos';
import { Posts } from './JSON/Posts';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Users/> */}
     {/* <Todos/> */}
     <Routes>
        <Route path="" element={<Users/> } /> 
        <Route path="todos" element={<Todos/>  } /> 
        <Route path="users" element={<Json_user/>  } /> 
        <Route path="albums" element={<Albums/>  } /> 
        <Route path="comments" element={<Comments/>  } /> 
        <Route path="photos" element={<Photos/>  } /> 
        <Route path="posts" element={<Posts/>  } /> 



     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
