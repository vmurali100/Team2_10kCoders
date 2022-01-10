import React,{Component} from "react"
import {connect} from "react-redux"

class Products extends Component{
    render(){
        return(
            <div>
                {this.props.product.map((prd)=>{
                    return <p key={prd}>{prd.description}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        product:state.product
    }
}
export default connect(mapStateToProps)(Products)