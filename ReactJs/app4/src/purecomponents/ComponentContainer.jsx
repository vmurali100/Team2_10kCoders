import React,{Component} from "react"
import { NormalComponent } from "./NormalComponent"
import PureComp from "./PureComp";
export default class ComponentContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"hello..normal component..how r u?",
            count:1
        }
    }
    componentDidMount(){
            setInterval(() => {
                this.setState({count:this.state.count+1})
        },2000);
    }
    render(){
        return(
            <div>
<h2>
    hello from container component
    <NormalComponent message={this.state.message}/>
    <PureComp message={this.state.message}/>
</h2>
            </div>
        )
    }
}
