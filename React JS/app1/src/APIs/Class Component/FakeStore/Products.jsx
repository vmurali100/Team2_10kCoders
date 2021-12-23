import React, {Component} from 'react';
import axios from "axios"

export class Products extends Component{
    constructor(){
        super()
        this.state={
            products:[],
        }
    }
    render() {
        return <div>
            <h1>Fake Store API <span style={{color:'blue'}}>"Products"</span></h1>
            <ul>
                {this.state.products.map((product)=>{
                    return <li><span style={{color:'red', font:'italic'}}> Image:</span><br /> <img style={{height:'100px', width:'100px' ,border:'1px solid',padding:"5px"}} src= {product.image} alt="" /></li>
                })}
            </ul>
        </div>
    }
    componentDidMount(){
        let URL = 'https://fakestoreapi.com/products'
        
        axios.get(URL).then(res=>{
            let newState = {...this.state};
            newState['products']=res.data;
            this.setState(newState)
        })
    }
}
