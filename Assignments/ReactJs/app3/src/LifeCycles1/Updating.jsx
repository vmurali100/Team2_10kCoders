import React, { Component } from "react";

export class Updating extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("This is from getDerivedStateFromProps of Updating")
        return null
    }
    shouldComponentUpdate(){
        console.log("This is from ShouldComponentUpdate from Updating")
        return true
    }
    render() {
        return (
            <div><h2>{this.props.count}</h2></div>
        )
    }

    getSnapshotBeforeUpdate(){
        console.log("this is froim getSnapShotBeforeUpdate fr4om Updating")
        return null
    }

    componentDidUpdate(){
        console.log("This is from componentDidUpdate from Updating")
    }

}