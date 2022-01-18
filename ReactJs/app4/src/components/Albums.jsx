import React,{Component} from "react"
import {connect} from "react-redux"
import { getAllAlbumsAction } from "../redux_async/redux/actions"

class Albums extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
<button onClick={()=>{this.props.getAllAlbumsFunc()}}>getallalbums</button>
{this.props.albums.map((alb)=>{
    return <p key={alb.title}>{alb.title}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        albums:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllAlbumsFunc:()=>dispatch(getAllAlbumsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Albums)