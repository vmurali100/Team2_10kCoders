import React,{useState} from 'react'
import ClickCounter from '../HigherOrderComponent/ClickCounter'
import HoverCounter from '../HigherOrderComponent/HoverCounter'
import { MyComponent } from './MyComponent'

export const MyCompContainer = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
    // const returnClickCounter =()=>{
    //     return <ClickCounter/>
    // }

    // const returnHoverCount=()=>{
    //     return <HoverCounter/>
    // }
    return (
        // <div>
        //     <MyComponent render={returnClickCounter}/>
        //     <MyComponent render={returnHoverCount}/>
        // </div>
        <div>
            <MyComponent someInfo={someInfo} render={()=><ClickCounter />}/>
            <MyComponent render={()=><HoverCounter/>}/>
        </div>
    )
}
