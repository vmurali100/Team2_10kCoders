import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Product Description</h3>
                <ol>
                    {this.props.product.map((pro) => {
                        return <li key={pro.description}>{pro.description}</li>
                    })}
                </ol>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        product: state.product
    }
}
export default connect(mapStateToProp)(Products)