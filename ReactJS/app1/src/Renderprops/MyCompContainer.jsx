import React,{useState} from 'react'
import ClickCounter from '../HigherOrderComponent/ClickCounter'
import HoverCounter from '../HigherOrderComponent/HoverCounter'
import { MyComponent } from './MyComponent'

export const MyCompContainer = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
    
        <div>
            <MyComponent someInfo={someInfo} render={()=><ClickCounter />}/>
            <MyComponent render={()=><HoverCounter/>}/>
        </div>
    )
}