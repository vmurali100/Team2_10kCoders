import React, {Component} from 'react';
import axios from "axios"

export class Comments extends Component{
    constructor(){
        super()
        this.state={
            comments:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Comments"</span></h1>
            <ul>
                {this.state.comments.map((comment)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Body:</span> {comment.body}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/comments'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['comments']=res.data;
            this.setState(newState)
        })
    }
}
