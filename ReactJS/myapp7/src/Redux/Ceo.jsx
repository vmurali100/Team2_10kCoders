import React from "react";
import { Component } from "react";
import {connect} from "react-redux"

class Ceo extends Component {
render (){
    console.log(this.props)
    return(
        <div>{this.props.ceo[0].age
        }</div>
    )
}
}
function mapStateToProps(state){
    return {
        ceo :state.ceo
    }
}
export default connect(mapStateToProps)(Ceo)