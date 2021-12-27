import React,{Component}from "react";
import axios from "axios";
class Fk1 extends Component{
    constructor(){
        super();
        this.state={
            products:[],

        };
    }
    render(){
        return(
            <div>
                <h2>products</h2>
                <ul>{this.state.products.map((product)=>{
                    return <li><img style={{width:"150px",height:"150px"}}src={product.image}/></li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  prURL="https://fakestoreapi.com/products";
        axios.get(prURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['products']=res.data;
            this.setState(newState);
        });
        }

}
export default Fk1;