import React,{useState} from "react"
export const Brahmam = ()=>{
const[myName ,setmyName]=useState("Brahmam")

    return<div>
     <button onClick={setmyName("BrahmamSatyaMurthy")}></button>
         
        <h2>hello {myName} Component</h2>
    </div>
}