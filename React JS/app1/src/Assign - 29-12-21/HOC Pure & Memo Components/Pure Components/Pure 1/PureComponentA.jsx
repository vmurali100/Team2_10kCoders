import React, { PureComponent } from 'react'

export default class PureComponentA extends PureComponent {
    constructor(props) {
        super(props)
                 
        }
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
                {console.log("I am Pure Component  nd I am Not Rendering")}
            </div>
        )
    }
}
