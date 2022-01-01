import React from 'react'
import { UserConsumerE } from './PostsContextE'

export const GrandChildE = ({message}) => {
    return (
        <div><hr />
            <UserConsumerE>
                {(val)=>{
                    console.log(val)
                    return <h3 style={{color:'blue'}}>Message from Container Componet (Context ) Name : Post : {val.name}</h3>
                }}
            </UserConsumerE>
        </div>
    )
}