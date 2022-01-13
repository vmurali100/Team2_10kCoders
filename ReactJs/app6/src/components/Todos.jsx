import React,{Component} from "react"
import { getAllTodosAction } from "../redux_async/redux/actions"
import{connect} from "react-redux"


class Todos extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllTodosFunc()}}>getalltodos</button>
            </div>
        )

    }
}
function mapStateToProps(state){
    return{
        todos:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllTodosFunc:()=>dispatch(getAllTodosAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)