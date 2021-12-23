import React, { Component } from 'react'
import axios from 'axios'

export default class ClassComponent6 extends Component {
    constructor(){
        super()
        this.state= {
            albums:[]
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component6</h1>
                <ul>
                    {this.state.albums.map((album)=>{
                        return(<li key={album.id}>{album.title}</li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://jsonplaceholder.typicode.com/albums"
        axios.get(URL).then(({data})=>{
            let newState = {...this.state}
            newState["albums"] = data
            this.setState(newState)
        })
    }
}
