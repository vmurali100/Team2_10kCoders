import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux"
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Redux/reducer';
import { Provider } from "react-redux"
import rootReducer1 from './Redux1/reducer';
import rootReducer2 from './Redux3/reducer';

const store = createStore(rootReducer1)
const store1 = createStore(rootReducer)
const store2  = createStore(rootReducer2)

ReactDOM.render(
  <React.StrictMode>
   <Provider store1={store1} store={store}  store2={store2}>
   <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
