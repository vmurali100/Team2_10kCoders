import React from 'react'
import { ChildE } from './ChildE'

export const ParentCompE = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Home Component : {message}</h3>
            <ChildE message={message}/>
        </div>
    )
}