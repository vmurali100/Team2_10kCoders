import React from 'react'

const FunctionC = ({message}) => {
    console.log(message)
    return (
        <div>
            <h3>Message from Parent : {message}</h3>
        </div>
    )
}

export default React.memo(FunctionC);