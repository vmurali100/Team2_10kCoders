import React from 'react'
import { UserConsumer } from './UsersContext'

export const GrandChildA = ({message}) => {
    return (
        <div><hr />
            <UserConsumer>
                {(val)=>{
                    console.log(val)
                    return <h3 style={{color:'blue'}}>Message from Container Componet (Context ) : Users : {val.name}</h3>
                }}
            </UserConsumer>
        </div>
    )
}