import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllFilltext3Action } from "../redux_async/redux/actions"

class Filltext3 extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllFilltext3Func()}}>getfilltext3</button>
{this.props.filltext3.map((fill3)=>{
   return <p key={fill3.password}>{fill3.password}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filltext3:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllFilltext3Func:()=>dispatch(getAllFilltext3Action())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filltext3)