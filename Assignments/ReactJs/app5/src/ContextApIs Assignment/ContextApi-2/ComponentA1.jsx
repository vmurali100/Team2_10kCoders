import React, { Component } from 'react'
import ComponentB2 from './ComponentB2'


export default class ComponentA1 extends Component {
    render() {
        return (
            <div>
                ComponentA1
                <ComponentB2 />
            </div>
        )
    }
}
