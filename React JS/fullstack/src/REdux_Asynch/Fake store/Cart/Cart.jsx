import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsersAction } from './Actions'

class Cart extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => { this.props.getAllUsersFunc() }}>Get All Carts</button>
               {/* {this.props.carts.map((e)=>{
                   return <p key={e.id}>{e.id}</p>
               })} */}

             
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        carts: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsersFunc: () => dispatch(getAllUsersAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)