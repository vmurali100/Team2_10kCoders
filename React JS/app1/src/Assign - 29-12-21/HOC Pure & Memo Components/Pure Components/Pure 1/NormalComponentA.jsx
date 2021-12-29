import React from 'react'

export const NormalComponentA = ({message}) => {
    console.log("I am Parent Child  Component  nd I am Re-Rendering")
    return (
        <div>
            <h2>Hi I am Parent Component Message : {message}</h2>
        </div>
    )
}
