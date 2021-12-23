import React, {Component} from 'react';
import axios from "axios"

export class Fname extends Component{
    constructor(){
        super()
        this.state={
            fname:[],
        }
    }
    render() {
        return <div>
            <h1>Fill Text <span style={{color:'blue'}}>"Fname"</span></h1>
            <ul>
                {this.state.fname.map((name)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Last Name :</span> {name.lname}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['fname']=res.data;
            this.setState(newState)
        })
    }
}
