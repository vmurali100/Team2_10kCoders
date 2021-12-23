import React, { Component } from 'react'

export default class ConditionComponent extends Component {
    componentWillUnmount(){
        alert("I am going to Be Removed Now")
    }
    render() {
        return (
            <div>
                <h2>Hello I am Visible Now</h2>
            </div>
        )
    }
}