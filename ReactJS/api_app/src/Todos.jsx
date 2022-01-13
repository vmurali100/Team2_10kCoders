import { Component } from "react";
import { connect } from "react-redux";
import { getApiDataAction } from "./Redux/Action";

class Todos extends Component{


    render(){
       console.log(this.props)
        return <div>
    <button type="button" onClick={()=>this.props.getUserFunc()}>GET DATA</button>
{this.props.todos ? this.props.todos.map((e)=>{
    return <li>{e.title}</li>
}) : <button type="button" onClick={()=>this.props.getUserFunc()}>GET DATA</button>}
{console.log(this.props)}
        </div>
         
    }
}

const MSTP =(state)=>{
    return {
todos : state
    }
}
const  MDTP = (dispatch)=>{
   return {
    getUserFunc : ()=>{dispatch(getApiDataAction())}
   }
}

export default connect(MSTP ,MDTP)(Todos)