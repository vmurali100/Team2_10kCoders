import React, { Component } from "react"
import { connect } from "react-redux"
import { getAllCommentsAction } from "../redux_async/redux/actions"


class Comments extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
<button onClick={()=>{this.props.getAllCommentsFunc()}}>getallcomments</button>
            </div>

        )
    }
}
function mapStateToProps(state) {
    return({
        comments: state
    })
}
function mapDispatchToProps(dispatch) {
    return{
        getAllCommentsFunc:()=>dispatch(getAllCommentsAction())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)