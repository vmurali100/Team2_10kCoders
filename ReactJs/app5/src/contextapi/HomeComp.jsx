import React from "react"
import { ParentComp } from "./ParentComp"

export const HomeCOMP=({message})=>{
    return(
        <div>
            <h3>
                message received from container is:{message}
            </h3>
            <ParentComp message={message}/>
        </div>
    )
}