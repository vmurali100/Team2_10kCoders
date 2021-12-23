import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent5 extends Component {
    constructor(){
        super()
        this.state= {
            comments:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component5</h1>
                <ul>
                    {this.state.comments.map((comment)=>{
                        return(<li key={comment.id}>{comment.name}</li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/comments"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["comments"] = data
            this.setState(newState)
        })
    }
}
