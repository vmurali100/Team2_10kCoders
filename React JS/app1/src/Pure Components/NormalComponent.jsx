import React from 'react'

export const NormalComponent = ({message}) => {
    console.log("I am Re Rendering Now ")
    return (
        <div>
            <h2>Message from Parent Component : {message}</h2>
        </div>
    )
}