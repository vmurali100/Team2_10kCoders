import React ,{Component} from "react"
import {connect} from "react-redux"
class Albums extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.album.map((alm)=>{
                    return <p key={alm.title}>{alm.title}</p>

                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        album:state.album
    }
}
export default (connect)(mapStateToProps)(Albums)