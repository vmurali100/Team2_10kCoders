import React from 'react'
import { ParentCompC } from './ParentCompC'

export const HomeCompC = ({message}) => {
    return (
        <div>
            <hr />
            <h3>The message Received From Container is : {message}</h3>
            <ParentCompC message={message}/>
        </div>
    )
}