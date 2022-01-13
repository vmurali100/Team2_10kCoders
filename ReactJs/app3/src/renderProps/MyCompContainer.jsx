import React,{Component} from "react"
import { MyComponent } from "./MyComponent"

export const MyCompContainer=()=>{
   const sayHello=()=>{
        return <h2>hello..how r u</h2> 
    }
    return(
        <div>
            <MyComponent render={sayHello}/>
        </div>
    )
}