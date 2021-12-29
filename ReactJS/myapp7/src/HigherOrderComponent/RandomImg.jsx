import React ,{ Component } from "react"
import { HOComp } from "./Higherordercomp"

class  RandomImg extends Component{
    render(){
      let  {handle ,colour ,my} = this.props
        return <div>
       <div>
       <button onClick={handle}>click me </button> <br />
        <p> {colour}</p> 
       </div>
       <hr />
        <img style={{"width":"500px" , "height": "200px"}} src="" alt="" />
    </div>
    }
     
}
export default HOComp(RandomImg)