import React,{Component}from "react";
import axios from "axios";
class Js6 extends Component{
    constructor(){
        super();
        this.state={
            photos:[],

        };
    }
    render(){
        return(
            <div>
                <h2>photos</h2>
                <ul>{this.state.photos.map((photo)=>{
                    return <li><img style={{width:"150px",height:"150px"}}src={photo.url}/></li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  ppURL="https://jsonplaceholder.typicode.com/photos";
        axios.get(ppURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['photos']=res.data;
            this.setState(newState);
        });
        }

}
export default Js6;