import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent2 extends Component {
    constructor(){
        super()
        this.state = {
            carts:[]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.carts.map((cart)=>{
                        return(<li key={cart.id}>{cart.date}</li>)
                    })}
                </ul>
            </div>
        )
    }

    componentDidMount(){
        let URL = "https://fakestoreapi.com/carts"
        axios.get(URL).then(({data})=>{
            console.log(data)
            let newState = {...this.state}
            newState["carts"] = data
            this.setState(newState)
        })
    }
}
