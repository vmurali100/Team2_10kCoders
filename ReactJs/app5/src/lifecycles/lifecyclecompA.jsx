import React,{Component} from "react"
import LifeCycleCompB from "./lifecyclecompB"
export default class LifeCycleCompA extends Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        };
        console.log("iam from constructor")     
    }
    static getDerivedStateFromProps(state,props){
        console.log("i am from getderivedstatefromprops",state,props)
        return null
    }
    changeCount=()=>{
        this.setState({count:this.state.count+1})
    }
    componentDidMount(){
        console.log("i am from componentdidmount")
    }
    render(){
        console.log("iam from render")
        return(
            <div>
                <h2>hello from reactlifecyclecomp</h2>
                <button onClick={this.changeCount}>change count</button>
            </div>
        )
            
        
    }
}