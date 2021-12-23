import axios from 'axios'
import React, { Component } from 'react'

export default class ClassComponent4 extends Component {
    constructor(){
        super()
        this.state= {
            posts:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component4</h1>
                <ul>
                    {this.state.posts.map((post)=>{
                        return(<li key={post.id}>{post.title}</li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/posts"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["posts"] = data
            this.setState(newState)
        })
    }
}
