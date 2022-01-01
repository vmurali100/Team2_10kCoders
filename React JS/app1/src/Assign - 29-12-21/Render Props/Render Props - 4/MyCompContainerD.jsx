import React,{useState} from 'react'
import ClickCounterD from './ClickCounterD'
import HoverCounterD from './HoverCounterD'
import { MyComponentD } from './MyComponentD'

export const MyCompContainerD = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponentD someInfo={someInfo} render={()=><ClickCounterD />}/>
            <MyComponentD render={()=><HoverCounterD/>}/>
        </div>
    )
}