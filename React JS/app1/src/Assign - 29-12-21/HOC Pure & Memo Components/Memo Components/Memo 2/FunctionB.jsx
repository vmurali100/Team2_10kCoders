import React from 'react'

const FunctionB = ({message}) => {
    console.log(message)
    return (
        <div>
            <h3>Message from Memo Component : {message}</h3>
        </div>
    )
}

export default React.memo(FunctionB);