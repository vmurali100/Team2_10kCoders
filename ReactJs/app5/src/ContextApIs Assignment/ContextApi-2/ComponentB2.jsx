import React, { Component } from 'react'
import ComponentC2 from './ComponentC2'



export default class ComponentB2 extends Component {
    render() {
        return (
            <div>
                ComponentB1
               <ComponentC2 />
            </div>
        )
    }
}
