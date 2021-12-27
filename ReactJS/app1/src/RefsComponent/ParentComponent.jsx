import React, { Component } from 'react'
import InputRefComponent from './InputRefComponent'

export default class ParentComponent extends Component {
    render() {
        return (
            <div>
                <InputRefComponent/>
            </div>
        )
    }
}
