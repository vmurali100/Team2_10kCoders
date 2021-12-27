import React,{Component}from "react";
import axios from "axios";
class Fk3 extends Component{
    constructor(){
        super();
        this.state={
            userss:[],

        };
    }
    render(){
        return(
            <div>
                <h2>users</h2>
                <ul>{this.state.userss.map((use)=>{
                    return <li>{use.email}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  urURL="https://fakestoreapi.com/users";
        axios.get(urURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['userss']=res.data;
            this.setState(newState);
        });
        }

}
export default Fk3;