import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home';
import { Albums } from './Components/json/Albums';
import { Comments } from './Components/json/Comments';
import { Photos } from './Components/json/Photos';
import { Post } from './Components/json/Post';
import { Todos } from './Components/json/Todos';
import { Users } from './Components/json/Users';
import { Cart } from './Components/fakesrore/Cart';
import { Products } from './Components/fakesrore/Products';
import { Usersfake } from './Components/fakesrore/Usersfake';
import { Employe } from './Components/filltext/Employe';
import { Name } from './Components/filltext/Name';
import { Person } from './Components/filltext/Person';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/posts" element={<Post/>}/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/usersfake" element={<Usersfake/>}/>
          <Route path="/employe" element={<Employe/>}/>
          <Route path="/name" element={<Name/>}/>
          <Route path="/person" element={<Person/>}/>


         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
