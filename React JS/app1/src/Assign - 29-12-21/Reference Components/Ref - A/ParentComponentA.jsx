import React, { Component } from 'react'
import InputRefComponentA from './InputRefComponentA'

export default class ParentComponentA extends Component {
    render() {
        return (
            <div>
                <InputRefComponentA/>
            </div>
        )
    }
}