import React,{Component} from "react"
export const Hordercomp =(OriginalComponent)=>{
    //creating a new class component which returns original component//
class NewComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    handleCount=()=>{
        this.setState({count:this.state.count+1});
    };
    render(){
        return(
            <OriginalComponent count={this.state.count} handleCount={this.handleCount}/>
        )
    }
}
return(
    NewComponent
)
}