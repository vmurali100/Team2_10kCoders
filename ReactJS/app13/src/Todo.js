import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handle_todo } from './redux/action';

class Todo extends Component {
  getdata = ()=>{
      this.props.dispatch(handle_todo())
  }
    render() {
        return  <div>
            {this.props.Todo.map((t)=>{
                return <h1 key={t.title}>{t.email}</h1>
            })}
        </div>
            
        
    }
}

function hi(state){
    return{
        todo:state.todo
    }
}

export default   connect(hi) (Todo);