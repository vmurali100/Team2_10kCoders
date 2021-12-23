import axios from 'axios'
import React,{Component} from 'react'
export class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            Users:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Users Component</h2>
                <ul>
                    {this.state.products.map((User)=>{
                        return(
                            <li key={city} >
                                { User.city}
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
    componentDidMount(){
        let Fake_Text_URL ='https://fakestoreapi.com/products'
        axios.get(Fake_Text_URL).then((res)=>{
            console.log(res)
            let newState ={...this.state}
            newState['Users'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;