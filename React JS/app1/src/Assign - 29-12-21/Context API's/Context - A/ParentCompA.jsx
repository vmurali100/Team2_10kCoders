import React from 'react'
import { ChildCompA } from './ChildCompA'

export const ParentCompA = ({message}) => {
    return (
        <div>
            <hr />
            <h3>Message received from Home Component : {message}</h3>
            <ChildCompA message={message}/>
        </div>
    )
}