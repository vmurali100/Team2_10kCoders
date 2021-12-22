import { useState } from "react"

export const Apppppp=()=>{
    const[myName,setmyName]=useState("Divya");

    return  <div>
        <button onClick={()=>{setmyName("Divyas")}}>change name</button>
             <h2 style={{color:"Pink"}}>hello from {myName} component</h2>
</div>
}