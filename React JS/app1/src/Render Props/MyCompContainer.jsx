import React,{useState} from 'react'
import ClickCounter from '../Higher Order Component/ClickCounter'
import HoverCounter from '../Higher Order Component/HoverCounter'
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