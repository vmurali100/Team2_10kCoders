import React,{Component}from "react";
import axios from "axios";
class Js2 extends Component{
    constructor(){
        super();
        this.state={
            posts:[],

        };
    }
    render(){
        return(
            <div>
                <h2>posts </h2>
                <ul>{this.state.posts.map((post)=>{
                    return <li>{post.title}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  pURL="https://jsonplaceholder.typicode.com/posts";
        axios.get(pURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['posts']=res.data;
            this.setState(newState);
        });
        }

}
export default Js2;