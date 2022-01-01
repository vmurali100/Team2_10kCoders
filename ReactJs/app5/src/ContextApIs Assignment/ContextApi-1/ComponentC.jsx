import React, { Component } from 'react'
import { UserConsumer } from './ContextApi.Component'

export default class ComponentC extends Component {
    render() {
        return (
            <div>
                ComponentC
                <UserConsumer>
                    {(username)=>{
                        return <h4>Hello {username}</h4>
                    }}
                </UserConsumer>
            </div>
        )
    }
}
