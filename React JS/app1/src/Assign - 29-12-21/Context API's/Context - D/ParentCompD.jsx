import React from 'react'
import { ChildCompD } from './ChildCompD'

export const ParentCompD = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Home Component : {message}</h3>
            <ChildCompD message={message}/>
        </div>
    )
}