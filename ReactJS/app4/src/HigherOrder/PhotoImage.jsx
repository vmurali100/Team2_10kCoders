import React ,{ Component } from "react"
import {HigherOrder} from './Higherordercomp'

class  PhotoImage extends Component{
    render(){
      let  {handle ,colour ,my} = this.props
        return <div>
       <div>
       <button onClick={handle}>click me </button> <br />
        <p> {colour}</p> 
       </div>
       <hr />
        <img style={{"width":"400px" , "height": "300px"}} src="" alt="" />
    </div>
    }
     
}
export default HigherOrder(PhotoImage)