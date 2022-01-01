import React from 'react'
import { UserConsumerB } from './ProductContextB'

export const GrandChildB = ({message}) => {
    return (
        <div><hr />
            <UserConsumerB>
                {(val)=>{
                    console.log(val)
                    return <h3 style={{color:'blue'}}>Message from Container Componet (Context ) Products : Category :{val.category}</h3>
                }}
            </UserConsumerB>
        </div>
    )
}