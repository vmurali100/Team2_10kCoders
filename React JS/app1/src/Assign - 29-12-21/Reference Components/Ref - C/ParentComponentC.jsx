import React, { Component } from 'react'
import InputRefComponentC from './InputRefComponentC'

export default class ParentComponentC extends Component {
    render() {
        return (
            <div>
                <InputRefComponentC/>
            </div>
        )
    }
}