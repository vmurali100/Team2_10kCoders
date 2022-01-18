import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllUsersAction } from "../redux_async/redux/actions"

class Userss extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}>getallusers</button>
                {this.props.users.map((us)=>{
                    return<p key={us.email}>{us.email}</p>
                })}
            </div>
        )
    }
} 
function mapStateToProps(state){
    return{
        users:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllUsersFunc:()=>dispatch(getAllUsersAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Userss)