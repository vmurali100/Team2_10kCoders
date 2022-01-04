import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import Reducer from './Redux/Reducer';
import { Provider } from 'react-redux';
import Reducer2 from './Redux2/Reducer';
import Reducer3 from './Redux3/Reducer';


const store = createStore(Reducer) ;
const mystore = createStore(Reducer2) ;
const mystore3 = createStore(Reducer3)
console.log(store) 
console.log(mystore)
console.log(mystore3)
ReactDOM.render(
  <React.StrictMode>
 <Provider store = {store} mystore = {mystore} mystore3 = {mystore3}>
 <App />
 </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
