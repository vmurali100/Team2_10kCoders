import React,{Component}from "react";
import axios from "axios";
class Js5 extends Component{
    constructor(){
        super();
        this.state={
            todos:[],

        };
    }
    render(){
        return(
            <div>
                <h2>todos</h2>
                <ul>{this.state.todos.map((todo)=>{
                    return <li>{todo.title}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  tURL="https://jsonplaceholder.typicode.com/todos";
        axios.get(tURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['todos']=res.data;
            this.setState(newState);
        });
        }

}
export default Js5;