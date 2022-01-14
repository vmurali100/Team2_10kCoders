import { Component } from "react";
import { connect } from "react-redux";
import { getApiDataAction} from "./Redux/Action";

class Todos extends Component{

componentDidMount =()=>{
    console.log(this.props)
}
    render(){
       
        return <div>
   <br />
   

{this.props.todos ? this.props.todos.map((e)=>{
    return <li>{e.title}</li>
}) :  <button type="button" onClick={()=>this.props.getUserFunc()}>GET DATA</button> }


        </div>
         
    }
}

const MSTP =(state)=>{
    return {
todos : state.Todos,

    }
}
const  MDTP = (dispatch)=>{
   return {
    getUserFunc : ()=>{dispatch(getApiDataAction())} ,
  
   }
}

export default connect(MSTP ,MDTP)(Todos)