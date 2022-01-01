import React from 'react'
import { GrandChildComp } from './GrandChildComp'

export const ChildComp = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildComp message={message}/>
        </div>
    )
}