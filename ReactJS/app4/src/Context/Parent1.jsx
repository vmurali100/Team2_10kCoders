import React ,{ useState } from "react"
import { Child } from "./Child";
import {  UserProvider } from "./Context";
import {Parent2}  from "./Parent2"
   export const Parent1 = () =>{
  const [Name , setName] = useState("srikanth") ;
  const [age , setAge] = useState("25") ;
  const [zip ,setZip] = useState(506001)
  return <div>
 <UserProvider value={zip}>
 <h3>Hello From parent 1 Comp</h3>
     <Child />
 </UserProvider>
 
</div>
 
}