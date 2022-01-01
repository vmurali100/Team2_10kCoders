import React from 'react'
import { ParentCompB } from './ParentCompB'

export const HomeCompB = ({message}) => {
    return (
        <div>
            <hr />
            <h3>The message Received From Container is : {message}</h3>
            <ParentCompB message={message}/>
        </div>
    )
}