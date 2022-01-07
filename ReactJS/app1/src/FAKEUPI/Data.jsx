import axios from 'axios'
import React,{Component} from 'react'
export class Data extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            products:[]
        }
    }
    render(){
        return(
            <div>
                <h2>Users Component</h2>
                <ul>
                    {this.state.products.map((product)=>{
                        return(
                            <li key={category} >
                                { product.category}
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
            newState['products'] = res.data;
            this.setState(newState)
        })

    }
}
export default Data;