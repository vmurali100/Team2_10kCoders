import logo from './logo.svg';
import './App.css';
import  User  from './Components/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Reducer } from './Reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Userdetails } from './Components/UserDetails';

function App() {

  const store =createStore(Reducer , applyMiddleware(thunk))
  return (
    <div className="App">
    <Provider store={store}>
    {/* <User/> */}


 <BrowserRouter>
 {/* <User/> */}
 <Routes>
   <Route path="username"  element={<Userdetails/>} />
   <Route path="/"  element={<User/>} />
     
  
 </Routes>
 </BrowserRouter>
 </Provider>
    </div>
  );
}

export default App;
