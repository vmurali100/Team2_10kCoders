import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log("******Pure Component********")
        const {name} = this.props
        return (
            <div>
                Pure Component {name}
            </div>
        )
    }
}
