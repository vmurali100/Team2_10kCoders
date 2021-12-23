// import logo from './logo.svg';
import './App.css';
// import Akhil, { Legend } from './Akhil';
// import Akhil2 from './Akhil2';
// import Myajay ,{  Myname ,Myakhil} from './Myname';
// import Myclass, { Myclass3 } from './Myclass';
import User, { Carts, Products } from './FakeStore/UserClass';
import UserFunc, { UserFuncCart, UserFuncPro } from './FakeStore/UserFunc';
import Employee, { Name, Person } from './Filltext/MyClassAPI';
import EmployeeFunc, { NameFunc, PersonFunc } from './Filltext/MyfuncAPI';
import Posts, { Albums, Comments, Photos, Todos, Usersjson } from './JSONPlaceHolder/JSONClass';
import JSONpost, { JSONalbums, JSONcomments, JSONphotos, JSONtodos, JSONusers } from './JSONPlaceHolder/JSONfunc';


function App() {
  return (
    <div className="App">
     {/* <Akhil/>
     <Akhil2/>
     <Myajay/>
     <Myakhil/>
     <Myname/>
     <Myclass3/>
     <Myclass/>
     <Legend/> */}
   {/* <User />
   <Products />
   <Carts />
   <UserFunc />
   <UserFuncPro />
   <UserFuncCart />
   <Employee />
   < EmployeeFunc />
   <NameFunc />
   <PersonFunc />
   <Person />
   <Name /> */}
   {/* < Posts />
   <Comments />
   <Albums />
   <Photos />
   <Todos />
   <Usersjson /> */}
   <JSONpost />
   <JSONcomments />
   <JSONalbums />
   <JSONphotos />
   <JSONtodos />
   <JSONusers />

    
    </div>
  );
}

export default App;

