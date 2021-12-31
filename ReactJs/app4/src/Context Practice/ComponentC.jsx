import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class ComponentC extends Component {
    render() {
        return (
            <div>
                Component C
                <UserConsumer>
                    {username=>{
                        return <div>My name is {username}</div>
                    }}
                </UserConsumer>
            </div>
        )
    }
}
