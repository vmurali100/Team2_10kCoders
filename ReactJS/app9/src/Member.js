import React, { Component } from 'react';
import { connect } from "react-redux";
import { handle_member } from "./redux/actions";   
class Member extends Component {
    getData= () => {
        this.props.dispatch(handle_member())
    }

    render() {
        return <div>
            {this.props.members.map((mem)=>{
                 return <h1 key={mem.email}>{mem.email}</h1>
            })}
        </div>
            
        
    }
}
function mapStateToProps(state){
    return{
        members:state.members
    }
 
}

export default connect(mapStateToProps)(Member);