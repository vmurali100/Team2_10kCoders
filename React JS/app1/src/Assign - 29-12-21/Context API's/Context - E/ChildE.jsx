import React from 'react'
import { GrandChildE } from './GrandChildE'

export const ChildE = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildE message={message}/>
        </div>
    )
}