import React, { Component } from 'react';

export default class ChildComp extends Component {
       showelcome=()=>{
           alert("hey i am ChildREF Component")
       }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        );
    }
}

