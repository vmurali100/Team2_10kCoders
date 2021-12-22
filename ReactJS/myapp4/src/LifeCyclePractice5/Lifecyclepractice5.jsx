import React ,{ Component } from "react";  
import Lifecyclechild from "./Lifecyclechild";
import Removecond from "./Removecond";

export default class Lifecyclepractice5 extends Component{
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
     return <div id="here">
         <h1> Parent Component Count = {this.state.count}</h1>
         <button  onClick={this.increaseMe}>do add</button>
         <Lifecyclechild count={this.state.count}/>
         {this.state.count  < 104 && <Removecond/> }
        {this.state.count  > 104 && (document.getElementById("here").style.backgroundImage = "https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg") }

     </div>

 }
}
