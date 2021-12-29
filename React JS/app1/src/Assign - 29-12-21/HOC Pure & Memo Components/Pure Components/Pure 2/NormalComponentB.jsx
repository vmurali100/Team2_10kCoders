import React from 'react'

export const NormalComponentB = ({message}) => {
    console.log("Im child Component and Re-Rendering")
    return (
        <div>
            <h2>Hey im Parent Message : {message}</h2>
            
        </div>
    )
}
