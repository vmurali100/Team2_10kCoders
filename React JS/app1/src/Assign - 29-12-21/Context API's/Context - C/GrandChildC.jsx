import React from 'react'
import { UserConsumerC } from './CartContextC'

export const GrandChildC = ({message}) => {
    return (
        <div><hr />
            <UserConsumerC>
                {(val)=>{
                    console.log(val)
                    return <h3 style={{color:'blue'}}>Message from Container Componet (Context ) Cart: Id : {val.id}</h3>
                }}
            </UserConsumerC>
        </div>
    )
}