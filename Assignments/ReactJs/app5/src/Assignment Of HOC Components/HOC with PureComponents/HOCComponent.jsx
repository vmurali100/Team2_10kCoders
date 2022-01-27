import React from "react";

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }
        incrementCounter = ()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            return(
                <div>
                    <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} />
                </div>
            )
        }
    }
    return NewComponent
}