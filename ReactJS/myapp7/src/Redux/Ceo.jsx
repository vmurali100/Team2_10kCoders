import React from "react";
import { Component } from "react";
import {connect} from "react-redux"

class Ceo extends Component {
render (){
    console.log(this.props)
    return(
        <div>
            <h1>{this.props.ceo[0].age
        }</h1>
        <h1>{this.props.employee.map((e) => {
          return <li key={e}>{e}</li>;
        })}</h1> 
        <h1>{this.props.manager[0].name}</h1>
        </div>
    )
}
}
function mapStateToProps(state){
    console.log(state)
    return {
        ceo :state.ceo ,
        employee: state.employee,
        manager : state.manager

    }
}
export default connect(mapStateToProps)(Ceo)