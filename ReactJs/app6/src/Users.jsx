import React,{Component} from "react"
import {connect} from "react-redux"
class Users extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.user.map((usr)=>{
                  return <p key={usr}>{usr.username}</p>
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