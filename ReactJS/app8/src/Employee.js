import React, { Component } from 'react';
import { connect } from 'react-redux';

class Employee extends Component {

    getDetails = ()=>{
        this.props.dispatch(handle_employee())
    }
    render() {
        return 
            
        
    }
}
function mapStateTOProps(){
    
}

export default (connect)(mapStateToProps)(Employee);