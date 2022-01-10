import React,{Component} from "react"
import ClickCounter from "../../../app5/src/higherordercomponents/ClickCounter"
import { MyComponent } from "./MyComponent"

export const MyCompContainer=()=>{
    const[someinfo,setsomeinfo]=useState("someinfo")
    // const returnClickCounter=()=>{
    //     return <ClickCounter/>
    // }
    // const sayHello=()=>{
    //     return <h2>hello..how r u</h2> 
    // }
    return(
        <div>
            {/* <MyComponent render={returnClickCounter}/> */}
            <MyComponent someinfo={someinfo} render={()=><ClickCounter />}/>
        </div>
    )
}