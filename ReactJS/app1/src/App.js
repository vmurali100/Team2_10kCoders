
import "./App.css";
// import { Employees } from "./Functional_Components/Employees";
// import { Student } from "./Functional_Components/Student";
// import { Teja } from "./Functional_Components/Teja";
// import ClickCounter from "./HigherOrderComponent/ClickCounter";
import HoverCounter from "./HigherOrderComponent/HoverCounter";
import { MyCompContainer } from "./RenderProps/MyCompContainer";
import ComponentsContainer from "./PureComponents/ComponentsContainer";
import { ContainerComp } from "./Context/ContainerComp";
// import ParentComponent from "./RefsComponent/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Student/>
      <Employees/> */}
      {/* <ParentComponent/> */}
      {/* <ComponentsContainer/> */}
      {/* <ClickCounter/> */}
      {/* <hr/> */}
      {/* <HoverCounter/> */}
      {/* <MyCompContainer/> */}
      <ContainerComp/>
    </div>
  );
}

export default App;
