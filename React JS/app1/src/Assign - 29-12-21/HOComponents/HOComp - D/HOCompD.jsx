import React, { Component } from 'react'

export const HOComponentD = (OriginalComponent) => {

   class NewCompD extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
            }
        }
        handleCount = () => {
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <OriginalComponent count={this.state.count} handleCount={this.handleCount} />
            )
        }
    }

    return NewCompD
}
