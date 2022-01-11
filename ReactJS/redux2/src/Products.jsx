import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
    render(props) {
        return (
            <div>
                {this.props.products.map((product)=>{
                    return <p key={product}>{product}</p>
                })}
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {products: state.products}
}
export default connect(mapStateToProps)(Products);