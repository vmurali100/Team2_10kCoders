import React,{Component} from "react"
import {connect} from "react-redux"
import {deleteUsersActions, getAllusersActions } from "./redux/actions";

class Users extends Component{
    getAllusersDetails=()=>{
        this.props.dispatch(getAllusersActions())
    }
    deleteUser=()=>{
        this.props.dispatch(deleteUsersActions())
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>hello from users component</h2>
                <button onClick={this.getAllusersDetails}>getusers</button>
                <button onClick={this.deleteUser}>deleteuser

                </button>
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllusers())
    // }
}
function mapStateToProps(state){
    return{
        users:state
    }
}
export default connect(mapStateToProps)(Users);