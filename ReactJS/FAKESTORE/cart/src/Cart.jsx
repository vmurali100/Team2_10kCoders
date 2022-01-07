import React,{ Component } from "react";
import { connect } from "react-redux";

class Cart extends Component{
    render(){
        return <div>
{this.props.cart.map((e)=>{
    return <h1 key={e.id}>{e.date}</h1>
})}
<button onClick={(e)=>this.changeCartData(e)}>ChangeData</button>

        </div>
        console.log()
    }
}

function  mapStateToProps(state){
    return {
        cart :state.cart
    }
}
function mapDispatchToProps (dispatch){
      return {
         changeCartData : ()=>dispatch({ type:"DEL_CART_DATA"})
      }
}
export default connect(mapStateToProps ,mapDispatchToProps )(Cart)