import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from './Redux/reducers';
import {BrowserRouter} from "react-router-dom"

const store = createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
