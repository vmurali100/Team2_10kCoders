import React from "react"
import { GrandChildComp } from "./GrandChildComp"

export const ChildCompo=({message})=>{
    return(
        <div>
            <h3>message received from parent:{message}</h3>
            <GrandChildComp message={message}/>
        </div>
    )
}