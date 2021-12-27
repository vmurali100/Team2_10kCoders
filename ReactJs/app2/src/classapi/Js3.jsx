import React,{Component}from "react";
import axios from "axios";
class Js3 extends Component{
    constructor(){
        super();
        this.state={
            comments:[],

        };
    }
    render(){
        return(
            <div>
                <h2>comments</h2>
                <ul>{this.state.comments.map((comment)=>{
                    return <li>{comment.email}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  cURL="https://jsonplaceholder.typicode.com/comments";
        axios.get(cURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['comments']=res.data;
            this.setState(newState);
        });
        }

}
export default Js3;