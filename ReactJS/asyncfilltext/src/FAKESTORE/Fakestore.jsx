import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction, getProductsAction, getCartAction } from "../Redux/Actions/index.js";

class  Fakestore extends Component  {
 render(){
     console.log(this.props)
    return <div>
        {/* fill text - person */}
        <button type="button" onClick={()=>this.props.getUsersFunc()}>GET USERS</button>
        {this.props.users.map((e)=> <h1 key={e.id}>{e.phone}</h1>)}
          {/* filltext - name */}
          <button type="button" onClick={()=>this.props.getProductsFunc()}>GET PRODUCTS</button>
        { this.props.products.map((e)=> <h1 key={e.description}>{e.description}</h1>)}
        {/* filltext - employee */}
        <button type="button" onClick={()=>this.props.getCartFunc()}>GET CART</button>
        {this.props.cart.map((e)=> <h1 key={e.date}>{e.date}</h1>)}
    </div>
 }
};

const MSTP =(state)=>{
    return {
       users : state ,
       products : state,
        cart :state,
    }
}
 const MDTP = (dispatch)=>{
  return {
      getUsersFunc : ()=>dispatch(getUsersAction()),
      getProductsFunc : ()=>dispatch (getProductsAction()) ,
      getCartFunc : ()=>dispatch(getCartAction())
  }
 }
export default connect(MSTP, MDTP)(Fakestore);
