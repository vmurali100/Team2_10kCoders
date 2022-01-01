import React,{useState} from 'react'
import ClickCounterA from './ClickCounterA'
import HoverCounterA from './HoverCounterA'
import { MyComponent } from './MyComponent'

export const MyCompContainer = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponent someInfo={someInfo} render={()=><ClickCounterA />}/>
            <MyComponent render={()=><HoverCounterA/>}/>
        </div>
    )
}