import React, { Component } from 'react'

export default class RegularComponent extends Component {
    render() {
        console.log("*******Regular Component**********")
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
