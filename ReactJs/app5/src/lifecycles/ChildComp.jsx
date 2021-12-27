import react,{Component} from "react"
export default class ChildComp extends Component{
    constructor(props){
        super(props);
        console.log("i am from constructor");
        this.state={}
    }
    static getDerivedStateFromProps(state,props){
        console.log("iam from getderivedstatefromprops",state,props);
        return null
    }
    shouldComponentUpdate(){
        console.log("iam from componentupdate")
        return true
    }
    getSnapshotBeforeUpdate()  {
        console.log("iam from getsnapshotbeforeupdate")
        return null
    }
    componentDidUpdate(){
console.log("iam from componentdidupdate")

    }
    render(){
        console.log("i am from render")
        return(
            <div>
<h2>{this.props.count}</h2>
            </div>
       ) 
    }

}