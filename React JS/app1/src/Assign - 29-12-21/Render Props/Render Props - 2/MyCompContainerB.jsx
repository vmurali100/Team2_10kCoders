import React,{useState} from 'react'
import ClickCounterB from './ClickCounterB'
import HoverCounterB from './HoverCounterB'
import { MyComponentB } from './MyComponentB'

export const MyCompContainerB = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponentB someInfo={someInfo} render={()=><ClickCounterB />}/>
            <MyComponentB render={()=><HoverCounterB/>}/>
        </div>
    )
}