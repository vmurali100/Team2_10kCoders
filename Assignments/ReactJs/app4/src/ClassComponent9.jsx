import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent9 extends Component {
    constructor(){
        super()
        this.state= {
            photos:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component9</h1>
                <ul>
                    {this.state.photos.map((photo)=>{
                        return(<li key={photo.id}>
                            <img src={photo.url} alt="NoIMAGe"></img>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/photos"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["photos"] = data
            this.setState(newState)
        })
    }
}
