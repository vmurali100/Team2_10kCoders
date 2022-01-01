import React from 'react'
import { ParentCompA } from './ParentCompA'

export const HomeCompA = ({message}) => {
    return (
        <div>
            <hr />
            <h3>The message Received From Container is : {message}</h3>
            <ParentCompA message={message}/>
        </div>
    )
}