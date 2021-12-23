import React, {Component} from 'react';
import axios from "axios"

export class Photos extends Component{
    constructor(){
        super()
        this.state={
            photos:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Photos"</span></h1>
            <ul>
                {this.state.photos.map((photo)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Title :</span> {photo.title}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/photos'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['photos']=res.data;
            this.setState(newState)
        })
    }
}
