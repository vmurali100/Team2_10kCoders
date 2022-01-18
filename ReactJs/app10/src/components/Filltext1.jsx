import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllFilltext1Action } from "../redux_async/redux/actions"

class Filltext1 extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllFilltext1Func()}}>getfilltext1</button>
{this.props.filltext1.map((fill1)=>{
    return <p key={fill1.fname}>{fill1.fname}</p>
})}
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