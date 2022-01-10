import React, {Component} from "react"
import {connect} from "react-redux"
class Carts extends Component{
    render(){
console.log(this.props)
return(
    <div>
        {this.props.cart.map((crt)=>{
            return <p key={crt.date}>{crt.date}</p>
        })}
    </div>
)
    }
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}
export default connect(mapStateToProps)(Carts)