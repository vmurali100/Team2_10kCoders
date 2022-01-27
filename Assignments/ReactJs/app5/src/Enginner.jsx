import React, { Component } from 'react'
import { connect } from 'react-redux'

class Enginner extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Engineer Component</h2>
                {this.props.engineers.map((std)=>{
                    return <p key={std}>{std}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        engineers:state.engineers
    }
}
export default connect(mapStateToProps)(Enginner)
