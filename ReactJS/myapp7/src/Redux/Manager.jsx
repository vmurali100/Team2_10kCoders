import React, { Component }  from "react"; 
import { connect } from "react-redux";

class Manager extends Component {
    render(){
        return <div>
           <h1> {this.props.manager[0].name}</h1>
        </div>
    }
}

function mapStateToProps(state) {
    return{
        manager : state.manager
    }
}
export default connect(mapStateToProps)(Manager)