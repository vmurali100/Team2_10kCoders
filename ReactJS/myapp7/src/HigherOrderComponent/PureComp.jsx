import React ,{  PureComponent } from "react"
import { HOComp } from "./Higherordercomp"

class Purecomp extends PureComponent{
    render(){
      let  {handle ,colour ,my} = this.props
        return <div>
       <div>
       <button onClick={handle}>click me </button> <br />
        <h1> {colour}</h1> 
       </div>
       <hr />
        <img style={{"width":"500px" , "height": "200px"}} src="" alt="" />
    </div>
    }
     
}
export default HOComp(Purecomp)