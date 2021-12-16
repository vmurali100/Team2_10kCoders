import logo from './logo.svg';
import './App.css';
import { Post } from './class Components/Post';
import { Student } from './Functional Components/Student';
import { Employees } from './Functional Components/Employees';
import { Students } from './Functional Components/Students';

function App() {
  return (
    <div className="App">
      <Post/>
      <Student/>
      <Employees/>
      <Students/>
    </div>
  );
}

export default App;
