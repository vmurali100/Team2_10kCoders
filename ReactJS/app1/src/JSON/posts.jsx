import axios from 'axios'
import React,{Component} from 'react'
export class posts extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Users Component</h2>
                <ul>
                    {this.state.products.map((User)=>{
                        return(
                            <li key={body} >
                                { post.body}
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
    componentDidMount(){
        let Fake_Text_URL ='https://jsonplaceholder.typicode.com/posts'
        axios.get(Fake_Text_URL).then((res)=>{
            console.log(res)
            let newState ={...this.state}
            newState['posts'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;