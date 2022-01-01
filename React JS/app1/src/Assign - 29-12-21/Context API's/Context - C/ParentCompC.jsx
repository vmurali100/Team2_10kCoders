import React from 'react'
import { ChildCompC } from './ChildCompC'

export const ParentCompC = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Home Component : {message}</h3>
            <ChildCompC message={message}/>
        </div>
    )
}