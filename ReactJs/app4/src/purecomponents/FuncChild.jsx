import React from "react"
const FuncChild=({message})=>{
    console.log(message)
    return(
        <div>
            <h3>message from parent:{message}</h3>
        </div>
    )
}
export default React.memo(FuncChild)