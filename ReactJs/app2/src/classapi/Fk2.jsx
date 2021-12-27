import React,{Component}from "react";
import axios from "axios";
class Fk2 extends Component{
    constructor(){
        super();
        this.state={
            carts:[],

        };
    }
    render(){
        return(
            <div>
                <h2>carts</h2>
                <ul>{this.state.carts.map((cart)=>{
                    return <li>{cart.date}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  crURL="https://fakestoreapi.com/carts";
        axios.get(crURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['carts']=res.data;
            this.setState(newState);
        });
        }

}
export default Fk2;