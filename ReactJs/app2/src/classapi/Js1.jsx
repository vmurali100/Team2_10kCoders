import React,{Component}from "react";
import axios from "axios";
class Js1 extends Component{
    constructor(){
        super();
        this.state={
            users:[],

        };
    }
    render(){
        return(
            <div>
                <h2>users </h2>
                <ul>{this.state.users.map((user)=>{
                    return <li>{user.name}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let URL="https://jsonplaceholder.typicode.com/users";
        axios.get(URL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['users']=res.data;
            this.setState(newState);
        });
        }

}
export default Js1;