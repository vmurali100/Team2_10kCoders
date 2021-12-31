import React , {createRef, useEffect, useRef, useState} from "react";

const RefComp = () => {
  const myref = React.createRef("");
  const [name ,setName ] = useState("")
const handleget =() =>{
     setName(myref.current.value);
     myref.current.value = "" ;
    
}
// const enableit = ()=>{
//     document.getElementById("btn").removeAttribute("disabled" , "")
// }
useEffect(()=>{
    myref.current.focus() ;
},[])

  return (
    <div>
    <h1>  {name}</h1>
      <input type="text" ref={myref} />
      <input type="button" id="btn" onClick={handleget} value="getit" />
    
    </div>
  );
};
export default RefComp;
