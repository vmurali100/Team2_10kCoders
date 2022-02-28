import React, { useState } from "react";
const Input = ()=>{
    const[inputvalue , setInputValue] = useState("srikanth")


    const onchange = (event)=>{
       const newValue = event.target.value
       setInputValue(newValue)
    }
    

    return(
        <div>
            <label >TEXT</label>
          <input placeholder="entersomehing..." onChange={onchange}/>
          {inputvalue}
        </div>
    )
}
export default Input;