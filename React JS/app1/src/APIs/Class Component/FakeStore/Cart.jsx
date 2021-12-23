import React, {Component} from 'react';
import axios from "axios"

export class Carts extends Component{
    constructor(){
        super()
        this.state={
            carts:[],
        }
    }
    render() {
        return <div>
            <h1>Fake Store API<span style={{color:'green'}}>"Carts"</span></h1>
            <ul>
                {this.state.carts.map((cart)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Id:</span> {cart.id}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://fakestoreapi.com/carts'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['carts']=res.data;
            this.setState(newState)
        })
    }
}
