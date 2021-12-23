import React,{Component} from "react";
import axios from "axios"

export default class ClassComponent1 extends Component{
    constructor(){
        super()
        this.state = {
            products:[]
        }
    }
    render(){
        return(
            <div>
                <h2>This is class Component</h2>
                <ul>
                    {this.state.products.map((product)=>{
                        return(<li key={product.id}>
                            <img src={product.image} alt=" "></img>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
    componentDidMount(){
        let URL = "https://fakestoreapi.com/products"
        axios.get(URL).then((res)=>{
            console.log(res.data)
            let newState = {...this.state}
            newState['products'] = res.data
            this.setState(newState)

        })
   }
}