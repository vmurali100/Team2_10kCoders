import React from 'react'
import { GrandChildC } from './GrandChildC'

export const ChildCompC = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildC message={message}/>
        </div>
    )
}