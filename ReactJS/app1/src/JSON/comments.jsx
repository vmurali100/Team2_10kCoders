import axios from 'axios'
import React,{Component} from 'react'
export class posts extends Component{
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
                    {this.state.products.map((comment)=>{
                        return(
                            <li key={body} >
                                { comment.email}
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
    componentDidMount(){
        let Fake_Text_URL ='https://jsonplaceholder.typicode.com/comments'
        axios.get(Fake_Text_URL).then((res)=>{
            console.log(res)
            let newState ={...this.state}
            newState['comments'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;