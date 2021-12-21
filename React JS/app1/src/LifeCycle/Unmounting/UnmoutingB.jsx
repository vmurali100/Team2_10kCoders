import React, { Component } from 'react'

export default class UnmountingB extends Component {
    componentWillUnmount(){
        alert("I am going to Be Removed Now - 3")
    }
    render() {
        return (
            <div>
                <h2>Hello I am Visible Now</h2>
            </div>
        )
    }
}