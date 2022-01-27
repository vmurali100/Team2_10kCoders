import React, { Component } from 'react'
import { UserConsumer2 } from './ContextApi2'

export default class ComponentC2 extends Component {
    render() {
        return (
            <div>
                Component C1
                <UserConsumer2>
                    {(usernmae)=>{
                        return <h4>MyName is {usernmae}</h4>
                    }}
                </UserConsumer2>
            </div>
        )
    }
}
