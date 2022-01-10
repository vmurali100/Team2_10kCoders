import React, { Component } from 'react';
import { handle_Picture } from './redux/action';
import { connect } from 'react-redux';

class Pictures extends Component {
  getPic = ()=>{
      this.props.dispatch(handle_Picture())
  }
    render() {
        return <div>
            {this.props.Pictures.map((p)=>{
                 return<h1 key={p.email}>{p.email}</h1>
            })}
        </div>
        
        
    }
}

function hello(state){
    return{
        Pictures:state.Pictures
    }
}

export default connect(hello)(Pictures);