import React, {Component} from 'react';
import axios from "axios"

export class Albums extends Component{
    constructor(){
        super()
        this.state={
            albums:[],
        }
    }
    render() {
        return <div>
            <h1>Json Place Holder <span style={{color:'blue'}}>"Albums"</span></h1>
            <ul>
                {this.state.albums.map((album)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Title :</span> {album.title}</li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://jsonplaceholder.typicode.com/albums'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['albums']=res.data;
            this.setState(newState)
        })
    }
}
