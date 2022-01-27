import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Doctor extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Doctors Component</h2>
                {this.props.doctors.map((std)=>
                    <p key={std}>{std}</p>
                )}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        doctors:state.doctors
    }
}

export default connect(mapStateToProps)(Doctor)
