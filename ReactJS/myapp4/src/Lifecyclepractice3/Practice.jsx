import React ,{ Component } from "react";
import Child from "./Childpractice";

export default  class Practice extends Component {
    constructor(props){
        super(props)
        this.state = ( ["one","two","three" ,"four"] )
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps")
        return null 
    }
    componentDidMount(){
        return console.log("value added to the DOM")
    }
    shouldComponentUpdate(){
        console.log("ok do update")
        return true
        
    }
    componentDidUpdate(){
        return console.log("value updated to the DOM")
    }
    componentWillUnmount(){
     console.log("component removed from the DOM")
    }
    // // updatenum = ()=> {
    // //    this.state.forEach((num)=>{
    // //     this.state[num]
    // //    })
        
    // }

 render(){
     return <div>
        
         {/* <h1 id="my">{this.state}</h1> */}
         <Child value = {this.state} />
         {/* <button onClick={this.updatenum()}>Update</button> */}
     </div>
 }
}