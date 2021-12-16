
import "./App.css";
import { Employees } from "./Functional_Components/Employees";
import { Student } from "./Functional_Components/Student";
import { Teja } from "./Functional_Components/Teja";

function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      <Student/>
      <Employees/>
    </div>
  );
}

export default App;
