import React, {Component} from 'react';
import axios from "axios"

export class Posts extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Posts"</span></h1>
            <ul>
                {this.state.posts.map((post)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Title:</span> {post.title}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/posts'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['posts']=res.data;
            this.setState(newState)
        })
    }
}
