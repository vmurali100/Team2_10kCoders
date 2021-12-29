import React from 'react'

export const NormalComponentD = ({message}) => {
    console.log("hey I am Parent Child Component and re-Rendering")
    return (
        <div>
            <h2>Hey I am Parent Message : {message}</h2>
        </div>
    )
}
