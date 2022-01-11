import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    render(props) {
        console.log(this.props);
        return (
            <div>
                
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {state}
}
export default connect(mapStateToProps)(Users);