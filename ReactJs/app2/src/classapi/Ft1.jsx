import React,{Component}from "react";
import axios from "axios";
class Ft1 extends Component{
    constructor(){
        super();
        this.state={
            usersss:[],

        };
    }
    render(){
        return(
            <div>
                <h2>filltext1</h2>
                <ul>{this.state.usersss.map((us)=>{
                    return <li>{us.fname}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  urfURL="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true";
        axios.get(urfURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['usersss']=res.data;
            this.setState(newState);
        });
        }

}
export default Ft1;