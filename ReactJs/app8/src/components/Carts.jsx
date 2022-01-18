import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllCartAction } from "../redux_async/redux/actions"

class Carts extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllCartsFunc()}}>getallcarts</button>
{this.props.carts.map((ca)=>{
    return<p key={ca.date}>{ca.date}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        carts:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllCartsFunc:()=>dispatch(getAllCartAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Carts)