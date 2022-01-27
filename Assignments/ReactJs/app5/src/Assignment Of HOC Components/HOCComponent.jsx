import React, { Component } from "react"

const UpdatedComponent = (OriginalComponent)=>{
    class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state ={
                count : 0
            }
        }
        incrementCounter = ()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            const {count} = this.state
            return(
                <div>
                    <OriginalComponent count={count} incrementCounter={this.incrementCounter}  />
                </div>
            )
        }
    }
    return NewComponent
}
export default UpdatedComponent