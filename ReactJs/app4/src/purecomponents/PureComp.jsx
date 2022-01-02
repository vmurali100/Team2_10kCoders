import React,{PureComponent} from "react"
export default class PureComp extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>{this.props.message}</h2>
                {console.log("hello from pure component")}
            </div>
        )
    }
}