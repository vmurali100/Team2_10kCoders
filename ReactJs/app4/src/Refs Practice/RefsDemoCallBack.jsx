import React,{Component} from "react";

export default class RefsDemoCallBack extends Component{
    constructor(props){
        super(props)
        this.cbRef = null
        this.setcbRef = element =>{
            this.cbRef = element
        }
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.setcbRef} />
            </div>
        )
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
}