import React,{Component} from "react"
import {connect} from "react-redux"

import { getAllPhotosAction } from "../redux_async/redux/actions"

class Photos extends Component{
render(){
    console.log(this.props)
    return(
        <div>
<button onClick={()=>{this.props.getAllPhotosFunc()}}>getallphotos</button>
{this.props.photos.map((pht)=>{
                     
                     return <p key={pht.url}><img style={{width:"150px",height:"150px"}} src={pht.url}/></p>
                     
                 })}
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
 