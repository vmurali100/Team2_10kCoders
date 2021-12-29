import '../App.css';
import InputRef from "./Ref/InputRef"
import CallbackRef from "./Ref/CallbackRef"
import InputValueRef from "./Ref/InputValueRef"
import InputValueCbRef from "./Ref/InputValueCbRef"
import ParentComp from './Ref/ParentComp';

function App() {
  return (
    <div className="App">
    <InputRef/>
    <CallbackRef/>
    <InputValueRef/>
    <InputValueCbRef/>
    <ParentComp /> 
    </div>
  );
}

export default App;
