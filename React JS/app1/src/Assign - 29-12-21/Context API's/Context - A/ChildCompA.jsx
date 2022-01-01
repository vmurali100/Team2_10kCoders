import React from 'react'
import { GrandChildA } from './GrandChildA'

export const ChildCompA = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message Recieved From Parent : {message}</h3>
            <GrandChildA message={message}/>
        </div>
    )
}