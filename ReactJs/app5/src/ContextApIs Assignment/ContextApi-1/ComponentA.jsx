import React, { Component } from 'react'
import ComponentB from './ComponentB'

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                Component A
                <ComponentB />
            </div>
        )
    }
}
