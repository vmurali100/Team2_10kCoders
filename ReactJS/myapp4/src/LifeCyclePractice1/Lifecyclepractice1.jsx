import React ,{ Component } from "react";  
import Lifecyclechild from "./Lifecyclechild";
import Removecond from "./Removecond";

export default class Lifecyclepractice extends Component{
constructor(props){
    super(props);
    this.state ={
        count : 100
    }
}
static getDerivedStateFromProps(state , props){
    console.log("this is from get derived state prom prop " , state , props)
    return null 

}
shouldComponentUpdate(){
    console.log("this is from shouldComponentUpdate")
    return true
}
getSnapshotBeforeUpdate(){
    console.log("am from getSnapshotBeforeUpdate")
    return null
    
}
componentDidMount(){
    console.log("am componentDidMount")
}
componentDidUpdate(){
    console.log("am componentDidUpdate")
}
componentWillUnmount(){
    console.log("am componentWillUnmount")
    
}
 increaseMe = ()=>{
this.setState ({count:this.state.count +1});

}

 render(){
     return <div>
         <h1>{this.state.count}</h1>
         <button  onClick={this.increaseMe}>do add</button>
         <Lifecyclechild count={this.state.count}/>
         {this.state.count  <= 104 && <Removecond/> }
     </div>

 }
}
