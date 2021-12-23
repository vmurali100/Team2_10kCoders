import axios from 'axios'
import React,{Component} from 'react'
export class albums extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            comments:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Users Component</h2>
                <ul>
                    {this.state.albums.map((album)=>{
                        return(
                            <li key={body} >
                                { album.title}
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
    componentDidMount(){
        let Fake_Text_URL ='https://jsonplaceholder.typicode.com/albums'
        axios.get(Fake_Text_URL).then((res)=>{
            console.log(res)
            let newState ={...this.state}
            newState['albums'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;