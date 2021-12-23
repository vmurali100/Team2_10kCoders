import React, {Component} from 'react';
import axios from "axios"

export class Todos extends Component{
    constructor(){
        super()
        this.state={
            todos:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Todos"</span></h1>
            <ul>
                {this.state.todos.map((todo)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Title:</span> {todo.title}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/todos'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['todos']=res.data;
            this.setState(newState)
        })
    }
}
