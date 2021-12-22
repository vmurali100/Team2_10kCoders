import React,{Component} from "react"
export default class Updating extends Component{
    constructor(){
        super()
        console.log("This is from Constructor of Updating")
        this.state={}
    }
    static getDerivedStateFromProps(state,props){
        console.log("This is from getDerivedStateFromProps of Updating")
        return null
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("This is shouldComponentUpdate from Updating")
        return true
    }

    render(){
        return(
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
    getSnapshotBeforeUpdate(){
        console.log("This is from getSnapShot from Updating")
        return null
    }
    componentDidUpdate(){
        console.log("This is from componentDidUpdate from Updating")
    }
}