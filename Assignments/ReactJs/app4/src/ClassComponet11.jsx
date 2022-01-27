import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent11 extends Component {
    constructor(){
        super()
        this.state= {
            datas:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component11</h1>
                <ul>
                    {this.state.datas.map((data)=>{
                        return(<li key={data.zip}> 
                            {data.tel}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["datas"] = data
            this.setState(newState)
        })
    }
}
