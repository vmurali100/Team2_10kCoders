import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllFilltext2Action } from "../redux_async/redux/actions"

class Filltext2 extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllFilltext2Func()}}>getfilltext2</button>
     {this.props.filltext2.map((fill2)=>{
    <p key={fill2.address}>{fill2.address}</p>

     })}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filltext2:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllFilltext2Func:()=>dispatch(getAllFilltext2Action())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filltext2)