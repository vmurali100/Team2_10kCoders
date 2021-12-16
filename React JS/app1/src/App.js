import logo from './logo.svg';
import './App.css';
import { Hook } from './Functional Components/Hook';
import { Student } from './Functional Components/Student';
import { Employees } from './Functional Components/Employees';
function App() {
  return (
    <div className="App">
      <h1>Hello, im App Project</h1>
      <Hook/>
      <Student/>
      <Employees/>
    </div>
  );
}

export default App;
