import React, { Component } from 'react'
import InputRefComponentB from './InputRefComponentB'

export default class ParentComponent extends Component {
    render() {
        return (
            <div>
                <InputRefComponentB/>
            </div>
        )
    }
}