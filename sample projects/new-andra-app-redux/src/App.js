import logo from './logo.svg';
import './App.css';
import { Reducer } from './Reducer';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { Home } from './Components/Home';
import {Provider} from 'react-redux'

function App() {


  // const store = createStore(Reducer , applyMiddleware(thunk));

  return (
    <div className="App">
    <Home/>
     
    </div>
  );
}

export default App;
