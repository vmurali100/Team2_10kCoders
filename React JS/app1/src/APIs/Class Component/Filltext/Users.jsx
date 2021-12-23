import React, {Component} from 'react';
import axios from "axios"

export class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[],
        }
    }
    render() {
        return <div>
            <h1>Fill Text <span style={{color:'blue'}}>"Users"</span></h1>
            <ul>
                {this.state.users.map((user)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Email :</span> {user.email}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['users']=res.data;
            this.setState(newState)
        })
    }
}
