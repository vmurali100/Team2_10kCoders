import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Cart ID</h3>
                {this.props.cart.map((car) => {
                    return <p key={car.id}>{car.id}</p>
                })}

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        cart : state.cart
    }
}
export default connect(mapStateToProp)(Cart)