import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userReducer from './redux/reducer';
import {createStore} from "redux";
import {Provider} from "react-redux"
import cartReducer from './redux_async/redux/reducer';
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"

const store=createStore(cartReducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />

  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
