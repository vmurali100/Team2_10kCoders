import React from 'react'
import { GrandChildD } from './GrandChildD'

export const ChildCompD = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildD message={message}/>
        </div>
    )
}