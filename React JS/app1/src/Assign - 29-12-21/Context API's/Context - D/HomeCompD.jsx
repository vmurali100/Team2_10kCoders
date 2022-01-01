import React from 'react'
import { ParentCompD } from './ParentCompD'

export const HomeCompD = ({message}) => {
    return (
        <div>
            <hr />
            <h3>The message Received From Container is : {message}</h3>
            <ParentCompD message={message}/>
        </div>
    )
}