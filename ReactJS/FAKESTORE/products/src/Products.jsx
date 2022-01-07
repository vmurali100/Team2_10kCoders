import React,{ Component } from "react";
import { connect } from "react-redux";

class Products extends Component{
    render(){
        return <div>
{this.props.products.map((e)=>{
    return <img src={e.image} alt="" width="200px" height="200px" />
})}
        </div>
    }
}

function  mapStateToProps(state){
    return {
        products :state.products
    }
}
export default connect(mapStateToProps)(Products)