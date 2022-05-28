import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/reducer';
import {applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import {legacy_createStore}from 'redux'
import thunk from 'redux-thunk'

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter forceRefresh={true} >
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
