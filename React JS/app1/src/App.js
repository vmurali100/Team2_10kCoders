import logo from './logo.svg';
import './App.css';

import { MyCompContainerA } from './Assign - 29-12-21/Render Props/Render Props - 1/MyCompContainerA';
import Products from './Redux API\'s/Fake store/Products/Products';
import MemoComponent from './Assign - 29-12-21/HOC Pure & Memo Components/Memo Components/Memo 1/MemoComponent';
import ComponentContainerA from './Assign - 29-12-21/HOC Pure & Memo Components/Pure Components/Pure 1/ComponentContainerA';
import Users from '../../fullstack/src/CRUD/Redux Crud/Reducer/Users';


function App() {
  return (
    <div className="App">
    <Users/>
    </div>
  );
}

export default App;
