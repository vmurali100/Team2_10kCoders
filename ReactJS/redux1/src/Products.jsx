import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
    render(props) {
        return (
            <div>
                <h1>Products</h1>
                {this.props.products.map((product)=>{
                    return (
                        <p key={product}>{product}</p>
                    )
                })}
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Products);