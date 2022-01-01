import React,{useState} from 'react'
import ClickCounterC from './ClickCounterC'
import HoverCounterC from './HoverCounterC'
import { MyComponentC } from './MyComponentC'

export const MyCompContainerC = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponentC someInfo={someInfo} render={()=><ClickCounterC />}/>
            <MyComponentC render={()=><HoverCounterC/>}/>
        </div>
    )
}