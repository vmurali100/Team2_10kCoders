import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './Redux/Reducer';
import userReducer from './Redux/Redux _A/Reducer';
import Reducer from './Redux API\'s/Fill Text/Name/Reducer';
import EmpReducer from './Redux API\'s/Fill Text/Employee/Reducer';
import PersonReducer from './Redux API\'s/Fill Text/Person/Reducer';
import CartReducer from './Redux API\'s/Fake store/Cart/Reducer';
import ProductReducer from './Redux API\'s/Fake store/Products/Reducer/Index';
import UserReducer from './Redux API\'s/Fake store/Users/Reducer';
import AlbumReducer from './Redux API\'s/Json/Albums/Reducer';
import CommentReducer from './Redux API\'s/Json/Comments/Reducer';
import PhotoReducer from './Redux API\'s/Json/Photos/Reducer';
import PostReducer from './Redux API\'s/Json/Posts/Reducer';
import TodoReducer from './Redux API\'s/Json/Todos/Reducer';
import UsersReducer from './Redux API\'s/Json/Users/Reducer';

const store = createStore(TodoReducer)
console.log(store)
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
