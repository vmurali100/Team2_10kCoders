import { Component } from "react";

 export const HOC = (Ogcomp) =>{
    class Newcomp extends Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
           
        }
        handlecount = ()=>{
            this.setState ({count :this.state.count +1})
        }
        render(){
        return <Ogcomp count ={this.state.count} handle ={this.handlecount} />
        }
    }
    return Newcomp ;
    
}