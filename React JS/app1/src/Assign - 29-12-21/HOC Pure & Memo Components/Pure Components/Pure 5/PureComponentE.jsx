import React, { PureComponent } from 'react'

export default class PureComponentE extends PureComponent {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h2>Hey I am Pure Component : {this.props.message}</h2>
                {console.log("I am Pure Component")}
            </div>
        )
    }
}
