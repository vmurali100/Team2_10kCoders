import React from 'react'
import { UserConsumerD } from './CommentsContextD'

export const GrandChildD = ({message}) => {
    return (
        <div><hr />
            <UserConsumerD>
                {(val)=>{
                    console.log(val)
                    return <h3 style={{color:'blue'}}>Message from Container Componet (Context ) Comments : Title : {val.title}</h3>
                }}
            </UserConsumerD>
        </div>
    )
}