import React,{Component} from "react"
import {connect} from "react-redux"

import { getAllPhotosAction } from "../redux_async/redux/actions"

class Photos extends Component{
render(){
    console.log(this.props)
    return(
        <div>
<button onClick={()=>{this.props.getAllPhotosFunc()}}>getallphotos</button>
        </div>
    )
}
 }
 function mapStateToProps(state){
     return{
         photos:state
     }
 }
 function mapDispatchToProps(dispatch){
     return{
         getAllPhotosFunc:()=>dispatch(getAllPhotosAction())
     }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(Photos)
 