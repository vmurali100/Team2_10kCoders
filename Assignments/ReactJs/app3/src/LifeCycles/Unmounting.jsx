import React, { Component } from 'react'

export default class Unmounting extends Component {
    componentWillUnmount(){
        alert("Iam Going to be Removed")
    }
    render() {
        return (
            <div>
                <h2>Component Will be Visible Now</h2>
            </div>
        )
    }
}
