import React,{Component}from "react";
import axios from "axios";
class Ft2 extends Component{
    constructor(){
        super();
        this.state={
            persons:[],

        };
    }
    render(){
        return(
            <div>
                <h2>filltext2</h2>
                <ul>{this.state.persons.map((person)=>{
                    return <li>{person.tel}</li>;
                })}
                    </ul>
            </div>
        );
    }
    componentDidMount(){
        let  urffURL="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
        axios.get(urffURL).then((res)=>{
            console.log(res.data);
            let newState={...this.state};
            newState['persons']=res.data;
            this.setState(newState);
        });
        }

}
export default Ft2;