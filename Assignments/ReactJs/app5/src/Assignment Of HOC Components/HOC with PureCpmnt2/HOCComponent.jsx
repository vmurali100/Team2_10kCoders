import React from "react";

const HOCComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count:0
            }
        }
        incrementCounter = ()=>{
            this.setState({count:this.state.count+1})
        }

        render(){
            const {count} = this.state
            return(
                <OriginalComponent count={count} incrementCounter={this.incrementCounter} />
            )
        }
    }
    return NewComponent
}
export default HOCComponent