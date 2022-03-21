import { connect } from "react-redux"
import getAllUsersAction from "../Redux/Actions/Index"
import React from "react"

const Todos = (props)=>{
    console.log(props)
  
return(
    <div>
    <h1>todos component</h1>
    {props.todos ? props.todos.map((x)=>{
        return <li key={x.id}>{x.title}</li>

    }):''}
    <button onClick={props.getalltodos} type="button">data</button>
   </div>
    

      
    
)
}


function MSTP(state){
    return{
        todos:state
    }
}


function MDTP(dispatch){
    return{
        getalltodos:()=>{dispatch(getAllUsersAction())}
    }
}
export default connect(MSTP,MDTP)(Todos)