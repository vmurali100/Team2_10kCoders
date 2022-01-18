import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllProductsAction } from "../redux_async/redux/actions"

class Products extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllProductsFunc()}}>getallproducts</button>
{this.props.products.map((pr)=>{
    return<p key={pr.title}>{pr.title}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        products:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllProductsFunc:()=>dispatch(getAllProductsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)