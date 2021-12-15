import logo from "./logo.svg";
import "./App.css";
import { Murali, Krishna, Sam } from "./Murali";
import { Kiran } from "./Narendra";

function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      <Murali />
      <Krishna />
      <Sam />
      <Kiran/>
    </div>
  );
}

export default App;
