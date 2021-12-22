import logo from './logo.svg';
import './App.css';
import { User } from './User';
import { Students } from './Students';
import { ClassRoom } from './Student';

function App() {
  return (
    <div className="App">
    <ClassRoom/>
    <Students/>
    </div>
  );
}

export default App;
