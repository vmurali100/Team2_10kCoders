import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllFilltext1Action } from "../redux_async/redux/actions"

class Filltext1 extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllFilltext1Func()}}>getfilltext1</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        filltext1:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllFilltext1Func:()=>dispatch(getAllFilltext1Action())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filltext1)