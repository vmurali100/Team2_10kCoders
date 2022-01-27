import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent8 extends Component {
    constructor(){
        super()
        this.state= {
            users:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component8</h1>
                <ul>
                    {this.state.users.map((user)=>{
                        return(<li key={user.id}>{user.website}</li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["users"] = data
            this.setState(newState)
        })
    }
}
