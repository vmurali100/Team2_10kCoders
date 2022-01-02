import React from "react"
export const NormalComponent=({message})=>{
console.log("i am rerendering now");
    return(
        <div>
            <h2>message from parent component:{message}</h2>
        </div>
    )
}