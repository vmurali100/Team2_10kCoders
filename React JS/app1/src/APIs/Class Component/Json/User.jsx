import React, {Component} from 'react';
import axios from "axios"

export class User extends Component{
    constructor(){
        super()
        this.state={
            users:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Users"</span></h1>
            <ul>
                {this.state.users.map((user)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Name:</span> {user.name}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/users'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['users']=res.data;
            this.setState(newState)
        })
    }
}
