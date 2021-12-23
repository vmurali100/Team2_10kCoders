import React, {Component} from 'react';
import axios from "axios"

export class Userss extends Component{
    constructor(){
        super()
        this.state={
            users:[],
        }
    }
    render() {
        return <div>
            <h1>Fake Store API<span style={{color:'blue'}}>"Users"</span></h1>
            <ul>
                {this.state.users.map((user)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Email:</span> {user.email}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://fakestoreapi.com/users'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['users']=res.data;
            this.setState(newState)
        })
    }
}
