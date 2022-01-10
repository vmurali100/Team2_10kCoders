import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
   getproduct = ()=>{
          this.props.dispatch(get_data())
   }
    render() {
        return <div>
            {this.props.product.map((y)=>{
                return <h1 key={y.title}>{y.title}</h1>
            })}
        </div>
            
        
    }
}

function data(state){
    return{
        Product:state.Product
    }
}

export default  connect(data) (Product);