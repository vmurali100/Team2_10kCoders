import React,{Component} from "react"
import ChildInput from "./ChildInputRef"
export default class InputComponent extends Component{
    constructor(props){
        super(props)
    //    this.inputRef=React.createRef()
        // this.inputRef=null
        // this.cbInputRef=(element)=>{
        //     this.inputRef=element
        // }
        this.ChildCompRef=React.createRef()
        
    }
    handleWelcome=()=>{
        this.ChildCompRef.current.Show()
    }
    render(){
        return(


            <div>
                <h2>input</h2>
{/* <input type="text" ref={this.cbInputRef} /> */}
<button onClick={this.handleWelcome}>focusin child</button>




<hr/>
<ChildInput ref={this.ChildCompRef}/>

            </div>
        )
    }
    componentDidMount(){
        console.log(this.ChildCompRef)
        // this.inputRef.current.focus()
        // this.inputRef.focus()
    }

}