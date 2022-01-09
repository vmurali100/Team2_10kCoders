import React,{Component} from "react"
import {connect} from "react-redux"
 class Photos extends Component{
     render(){
         console.log(this.props)
         return(
             <div>
                 {this.props.photo.map((pht)=>{
                     return(
                         <p key={pht.url}><img style={{width:"150px",height:"150px"}} src={pht.url}/></p>
                     )
                 })}
             </div>
         )
     }
 }
 const mapStateToProps=(state)=>{
     return{
         photo:state.photo
     }
 }
 export default connect(mapStateToProps)(Photos)