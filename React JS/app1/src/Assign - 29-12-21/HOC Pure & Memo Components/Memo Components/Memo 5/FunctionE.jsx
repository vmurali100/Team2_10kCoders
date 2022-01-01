import React from 'react'

const FunctionE = ({message}) => {
    console.log(message)
    return (
        <div>
            <h3>Message from MemoE Parent : {message}</h3>
        </div>
    )
}

export default React.memo(FunctionE);