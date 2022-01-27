import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent7 extends Component {
    constructor(){
        super()
        this.state= {
            todos:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component7</h1>
                <ul>
                    {this.state.todos.map((todo)=>{
                        return(<li key={todo.id}>{todo.title}</li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/todos"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["todos"] = data
            this.setState(newState)
        })
    }
}
