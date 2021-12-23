import axios from 'axios'
import React,{Component} from 'react'
export class carts extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            carts:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Users Component</h2>
                <ul>
                    {this.state.products.map((cart)=>{
                        return(
                            <li key={city} >
                                { cart.id}
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
            newState['carts'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;