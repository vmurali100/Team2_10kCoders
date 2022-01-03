import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import Reduder from './Redux/Reducer';
import { Provider } from 'react-redux';
import Reducer2 from './Redux2/Reducer';


const store = createStore(Reduder) ;
const mystore = createStore(Reducer2) ;
console.log(store) 
console.log(mystore)
ReactDOM.render(
  <React.StrictMode>
 <Provider store = {store} mystore = {mystore}>
 <App />
 </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
