import React, { Component } from "react"

const defaultAkhil = ()=>{
    return <div>
        <h1>my name is akhil </h1>
        <h2>welcome you</h2>
    </div>
}
 export class Legend extends Component{
    state = (
               {massage : "hello from the other side   !!!!!!!! ",
                id:2222,
            name:"akhil varma"}
               
            
    )
      render(){
          return <div>
              <p>{this.state.massage}</p>
              <p>{this.state.id}</p>
             
          </div>
          
      }
     
    }
    