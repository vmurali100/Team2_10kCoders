import React from 'react'
import { ChildCompB } from './ChildCompB'

export const ParentCompB = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Home Component : {message}</h3>
            <ChildCompB message={message}/>
        </div>
    )
}