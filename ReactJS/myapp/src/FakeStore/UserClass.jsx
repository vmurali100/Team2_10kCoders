import React,{ Component }  from 'react';
import axios from 'axios';
// import  React from './react'

export class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : [] ,
            persons :[] ,


        }
    }
    componentDidMount(){
        let Userdata = "https://fakestoreapi.com/products";
        // let result = ;
        axios.get(Userdata).then((res)=>{
            let newstate = {...this.state}
            newstate["users"] = res.data ;
            this.setState(newstate)
        })
    
    }
    render(){
        return <div>
          
         <ol>
         <h1>FAKE STORE - PRODUCTS</h1>
         {this.state.users.map((user)=>{
              return <li>{user.title}</li>
            })}
              
         </ol>
        </div>
    }
}
export default class User extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : [] ,
            persons :[] ,


        }
    }
    componentDidMount(){
        let Userdata = "https://fakestoreapi.com/users";
        // let result = ;
        axios.get(Userdata).then((res)=>{
            let newstate = {...this.state}
            newstate["users"] = res.data ;
            this.setState(newstate)
        })
    
    }
    render(){
        return <div>
         <ol>
         <h1>FAKE STORE - USERS</h1>
         {this.state.users.map((user)=>{
              return <li>{user.username}</li>
            })}
         </ol>
        </div>
    }
}

export  class Carts extends Component{
    constructor(props){
        super(props)
        this.state = {
            users : [] ,
            persons :[] ,


        }
    }
    componentDidMount(){
        let Userdata = "https://fakestoreapi.com/carts";
        // let result = ;
        axios.get(Userdata).then((res)=>{
            let newstate = {...this.state}
            newstate["users"] = res.data ;
            this.setState(newstate)
        })
    
    }
    render(){
        return <div>
         <ul >
         <h1>FAKE STORE - CART</h1>
         {this.state.users.map((user)=>{
              return <li>{user.date}</li>
            })}
         </ul>
        </div>
    }
}