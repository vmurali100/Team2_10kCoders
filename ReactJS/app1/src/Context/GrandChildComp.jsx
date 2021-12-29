import React from 'react'
import { UserConsumer } from './UserContext'

export const GrandChildComp = ({message}) => {
    return (
        <div>
            <UserConsumer>
                {(val)=>{
                    console.log(val)
                    return <h3>Message from Container Componet (Context ) : {val.name}</h3>
                }}
            </UserConsumer>
        </div>
    )
}
