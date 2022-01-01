import React from 'react'
import { GrandChildB } from './GrandChildB'

export const ChildCompB = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildB message={message}/>
        </div>
    )
}