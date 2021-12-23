import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent10 extends Component {
    constructor(){
        super()
        this.state= {
            datas:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component10</h1>
                <ul>
                    {this.state.datas.map((data)=>{
                        return(<li key={data.fname}> 
                            {data.fname}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["datas"] = data
            this.setState(newState)
        })
    }
}
