import React,{Component} from 'react'
import { handle_state } from './redux/action'
import { connect } from 'react-redux'


class State extends Component{
    getinform = ()=>{
        this.props.dispatch(handle_state())
    }
    
   render(){
     
       return <div>
           {this.props.College.map((x)=>{
               return <h1 key={(x.name)}>{x.name}</h1>
           })}
       </div>
   }
}

function information(state){
    return{
        College:state.College
    }
      
}
export default connect (information) (State)