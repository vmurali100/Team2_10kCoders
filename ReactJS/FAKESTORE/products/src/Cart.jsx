import React,{ Component } from "react";
import { connect } from "react-redux";

class Cart extends Component{
    render(){
        return <div>
{this.props.cart.map((e)=>{
    return <h1 key={e.id}>{e.date}</h1>
})}
        </div>
    }
}

function  mapStateToProps(state){
    return {
        cart :state.cart
    }
}
export default connect(mapStateToProps)(Cart)