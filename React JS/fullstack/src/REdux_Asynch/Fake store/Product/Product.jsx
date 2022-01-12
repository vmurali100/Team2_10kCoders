import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsersAction } from './Actions'

class Product extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}>Get All Users</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        products:state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsersFunc:()=>dispatch(getAllUsersAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)