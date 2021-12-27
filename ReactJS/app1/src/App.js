
import "./App.css";
import { Employees } from "./Functional_Components/Employees";
import { Student } from "./Functional_Components/Student";
import { Teja } from "./Functional_Components/Teja";
import ComponentsContainer from "./PureComponents/ComponentsContainer";
import ParentComponent from "./RefsComponent/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Student/>
      <Employees/> */}
      {/* <ParentComponent/> */}
      <ComponentsContainer/>
    </div>
  );
}

export default App;
