import React from 'react'
import { ParentCompE } from './ParentCompE'

export const HomeCompE = ({message}) => {
    return (
        <div>
            <hr />
            <h3>The message Received From Container is : {message}</h3>
            <ParentCompE message={message}/>
        </div>
    )
}