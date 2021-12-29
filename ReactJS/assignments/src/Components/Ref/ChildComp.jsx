import React, { Component } from 'react';

class ChildComp extends Component {

    showMessage = ()=>{
        alert("hello form child component")
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ChildComp;