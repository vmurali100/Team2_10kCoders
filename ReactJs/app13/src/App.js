import logo from './logo.svg';
import './App.css';
import React from "react";
import "./css/style.default.css";
import "./css/custom.css"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { Header } from './Componentapis/Header';
import { Json1 } from './Componentapis/json1/Json1';
import { Json2 } from './Componentapis/json2/Json2';
import { Json3 } from './Componentapis/json3/Json3';
import { Json4 } from './Componentapis/json4/Json4';
import { Json5 } from './Componentapis/json5/Json5';
import { Json6 } from './Componentapis/json6/Json6';
import { Fill1 } from './Componentapis/filltext1/Fill1';
import { Fill2 } from './Componentapis/filltext2/Fill2';
import { Fill3 } from './Componentapis/filltext3/Fill3';
import { Fake1 } from './Componentapis/fakestore1/Fake1';
import { Fake2 } from './Componentapis/fakestore2/Fake2';
import { Fake3 } from './Componentapis/fakestore3/Fake3';

// import Users from './Crud';
// import Users_redux from './Crudredux';
// import Users from './Users';

function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="json1" element={<Json1/>}/>
    <Route path="json2" element={<Json2/>}/>
    <Route path="json3" element={<Json3/>}/>
    <Route path="json4" element={<Json4/>}/>
    <Route path="json5" element={<Json5/>}/>
    <Route path="json6" element={<Json6/>}/>
    <Route path="fill1" element={<Fill1/>}/>
    <Route path="fill2" element={<Fill2/>}/>
    <Route path="fill3" element={<Fill3/>}/>
    <Route path="fake1" element={<Fake1/>}/>
    <Route path="fake2" element={<Fake2/>}/>
    <Route path="fake3" element={<Fake3/>}/>
    



      
</Routes>

 </BrowserRouter>
    </div>
  );
}

export default App;
