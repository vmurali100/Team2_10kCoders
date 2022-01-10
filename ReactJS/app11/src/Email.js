import React, { Component } from 'react';
import { handle_Comment } from './redux/action';
import { connect} from 'react-redux'

class Email extends Component {
 getcomment = ()=>{
     this.props.dispatch(handle_Comment())
 }
    render() {
        console.log(this.props)
        return <div>
           
                 {this.props.Comment.map((e)=>{
                     return <h1 key={e.email}>{e.email}</h1>
                 })}
        </div>
            
        
    }
}

function mapStateToProps(state){
    return{

        Comment:state.Comment
    }
}

export default  connect (mapStateToProps) (Email);