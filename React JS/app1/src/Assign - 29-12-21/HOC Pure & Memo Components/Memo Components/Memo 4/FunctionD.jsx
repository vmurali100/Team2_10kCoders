import React from 'react'

const FunctionD = ({message}) => {
    console.log(message)
    return (
        <div>
            <h3>Message from MemoD Component : {message}</h3>
        </div>
    )
}

export default React.memo(FunctionD);