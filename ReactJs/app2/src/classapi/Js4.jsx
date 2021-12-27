import React,{Component}from "react";
import axios from "axios";
class Js4 extends Component{
    constructor(){
        super();
        this.state={
            albums:[],

        };
    }
    render(){
        return(
            <div>
                <h2>albums</h2>
                <ul>{this.state.albums.map((album)=>{
                    return <li>{album.title}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  aURL="https://jsonplaceholder.typicode.com/albums";
        axios.get(aURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['albums']=res.data;
            this.setState(newState);
        });
        }

}
export default Js4;