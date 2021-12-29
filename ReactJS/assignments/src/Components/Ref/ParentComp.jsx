import React, { Component } from 'react';
import ChildComp from "./ChildComp"


class ParentComp extends Component {

    constructor()
    {
        super();
        this.childRef = React.createRef();
    }
    showMsg = ()=>{
        this.childRef.current.showMessage();
    }
    render() {
        return (
            <div>
            <button onClick={this.showMsg}>Show welcome message of child component</button>
            <ChildComp ref={this.childRef}/>
            </div>
        );
    }
}

export default ParentComp;