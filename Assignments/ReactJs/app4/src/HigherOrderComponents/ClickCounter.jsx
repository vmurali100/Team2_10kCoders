import React from "react"

export default class ClickCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    incrementCount = ()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
    render(){
        return(
            <div>
                <h1>This is from ClickCounter</h1>
                <button onClick={this.incrementCount}>Clicked {this.state.count}</button>
            </div>
        )
    }
}