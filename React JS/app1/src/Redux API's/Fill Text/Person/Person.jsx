import React, { Component } from 'react'
import { connect } from 'react-redux'
import getData from './Action'

 class Person extends Component {
     
    render() {
        console.log(this.props.person)
        
        return (
            <div>
                <h3>Person Address </h3>
                {this.props.person.map((per)=>{
                   return  <p key={per.address}>{per.address}</p>
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        person : state.person
        
    }
}
export default connect(mapStateToProps)(Person)