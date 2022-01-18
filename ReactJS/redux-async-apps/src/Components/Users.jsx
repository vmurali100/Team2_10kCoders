import React, { Component } from "react";
import  {connect } from "react-redux";
import { getAllUserAction } from "../REDUX_ASYNC/actions";

class Users extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}>GetALLUSERS</button>
                {this.props.Users.map((x)=>{
                         return <h1 key={x.id}>{x.name}</h1>
                })}
            </div>
        )
    }
}

function mapStateTOProps(state){
    return{
        Users:state
    }
}
function MapDispatchToProps(dispatch){
    return{
        getAllUsersFunc:()=>dispatch(getAllUserAction())
    }
}
export default connect(mapStateTOProps,MapDispatchToProps)(Users)