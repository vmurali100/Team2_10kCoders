import logo from './logo.svg';
import './App.css';
import { Userss } from './APIs/Class Component/FakeStore/Userss';
import { Cart } from './APIs/Functional Component/Fake store/Cart';
import { Products } from './APIs/Functional Component/Fake store/Products';
import { Name } from './APIs/Functional Component/Fill Text/Name';
import { Users } from './APIs/Functional Component/Json/Users';
import { Cricket } from './Authentication_API/Cricket';
import { Tiktok } from './Authentication_API/Tiktok';
import { Movies } from './Authentication_API/Movies';
import { Cartoon } from './Authentication_API/Cartoon';


function App() {
  return (
    <div className="App">
      <Cartoon/>
    </div>
  );
}

export default App;
