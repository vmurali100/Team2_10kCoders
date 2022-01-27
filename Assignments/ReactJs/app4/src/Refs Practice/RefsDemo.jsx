import React,{Component} from "react";


export default class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    refValue = ()=>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(<div>
            <input type="text" ref={this.inputRef}></input>
            <button onClick={this.refValue}>Click</button>
        </div>
        )
    }
    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }
}