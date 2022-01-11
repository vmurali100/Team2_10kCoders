import React from "react"
import { UserConsumer } from "./UserContext"

export const GrandChildComp=({message})=>{
    return(
        <div>
            <UserConsumer>
                {(val)=>{
                    console.log(val)
                    return<h3> message from container component(context): {val.email}</h3>
                }}
            </UserConsumer>
        </div>
    )

}
