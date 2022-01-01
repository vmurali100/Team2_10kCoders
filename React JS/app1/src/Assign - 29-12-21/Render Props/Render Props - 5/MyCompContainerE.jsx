import React,{useState} from 'react'
import ClickCounterE from './ClickCounterE'
import HoverCounterE from './HoverCounterE'
import { MyComponentE } from './MyComponentE'

export const MyCompContainerE
 = () => {
    const [someInfo, setsomeInfo] = useState("Some Info")
   
    return (
      
        <div>
            <MyComponentE someInfo={someInfo} render={()=><ClickCounterE />}/>
            <MyComponentE render={()=><HoverCounterE/>}/>
        </div>
    )
}