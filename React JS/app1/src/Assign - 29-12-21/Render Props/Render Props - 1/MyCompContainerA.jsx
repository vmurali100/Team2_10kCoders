import React,{useState} from 'react'
import ClickCounterA from './ClickCounterA'
import HoverCounterA from './HoverCounterA'
import { MyComponentA } from './MyComponentA'

export const MyCompContainerA = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponentA someInfo={someInfo} render={()=><ClickCounterA />}/>
            <MyComponentA render={()=><HoverCounterA/>}/>
        </div>
    )
}