import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            
        }
        console.log("Hello from LifecycleB Constructor")
    }
    
    render() {
        console.log("Hello From LifecycleB Render")
        return (
            <div>
                <h2>Hello From LifeCycleB - {this.props.count}</h2>
            </div>
        )
    }
}
