import React, { Component } from 'react'
import { connect } from 'react-redux'

class Students123 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.persons.map((std)=>{
                    return <p key={std}>{std}</p>
                })}
            
                {this.props.product1.map((prd)=>{
                    return <h1 key={prd}>{prd}</h1>
                })}
                 {this.props.users.map((usr)=>{
                    return <h1 key={usr}>{usr}</h1>
                })}
                {/* {Object.values(students).map((prd)=>{
                        return <h1>{prd}</h1>
                    })} */}

                <h5>{this.props.message}</h5>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
         persons:state.persons,
         product1:state.product,
         users:state.users,
         students:state.students,
         message:state.message
    }
}

export default connect(mapStateToProps)(Students123)