import React,{Component} from "react"
import {connect} from "react-redux"
class Users extends Component{
    render(){
        return(
            <div>
                {this.props.user.map((us)=>{
                    return <p key={us.password}>{us.password}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Users)