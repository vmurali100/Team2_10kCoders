import React,{Component} from "react";
import axios from "axios"

export default class ClassComponent3 extends Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }
    render(){
        return(
            <div>
                <h1>This is class Component3</h1>
                <ul>
                    {this.state.users.map((user)=>{
                        return(<li key={user.id}>
                            {user.email}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://fakestoreapi.com/users"
        axios.get(URL).then((res)=>{
            console.log(res.data)
            let newState = {...this.state}
            newState['users'] = res.data
            this.setState(newState)

        })
   }
}