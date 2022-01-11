import React from "react"
import { ChildCompo } from "./ChildCompo"

export const ParentComp=({message})=>{
    return(
        <div>
            <h3>
                message received from home component:{message}
            </h3>
            <ChildCompo message={message}/>
        </div>
    )
}