import React,{Component}from "react";
import axios from "axios";
class Ft3 extends Component{
    constructor(){
        super();
        this.state={
            personss:[],

        };
    }
    render(){
        return(
            <div>
                <h2>filltext3</h2>
                <ul>{this.state.personss.map((pers)=>{
                    return <li>{pers.password}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  urfffURL="http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true";
        axios.get(urfffURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['personss']=res.data;
            this.setState(newState);
        });
        }

}
export default Ft3;