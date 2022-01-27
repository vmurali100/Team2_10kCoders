import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent12 extends Component {
    constructor(){
        super()
        this.state= {
            datas:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component12</h1>
                <ul>
                    {this.state.datas.map((data)=>{
                        return(<li key={data.id}> 
                            {data.password}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["datas"] = data
            this.setState(newState)
        })
    }
}
