import React from "react";
import { connect } from "react-redux";
import { getAllUsersAction } from "../Redux/Actions/Index";
const Users = (props)=>{
    return(
       
        <div>
            <h1>hello users component</h1>
            <div>
            {props.users ? (
          props.users.map((data) => {
            return <li>{data.email}</li>;
          })
        ) : <button type="button" onClick={() => props.getallusers()}>
        GET USERS
      </button> }
              
            </div>
</div>
        
    )
}
function mapStateToProps(state){
    return{
        users:state
    }
}
function mapDispachToProps(dispatch){
    return{
        getallusers:()=>{dispatch(getAllUsersAction())}
    }
}
export default connect(mapStateToProps,mapDispachToProps)(Users)