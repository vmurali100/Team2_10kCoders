import React, { Component } from 'react'
import ComponentB from './ComponentB'
class ComponentA extends Component {
    render() {
        return (
            <div>
                Component A
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA
