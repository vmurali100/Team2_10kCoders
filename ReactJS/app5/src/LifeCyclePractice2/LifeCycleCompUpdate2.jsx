import React, { Component } from 'react';

class LifeCycleCompUpdate2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {};
        console.log("update2 constructor");
    }

    static getDerivedStateFromProps(state,props)
    {
        console.log("updat2 getDerivedStateFromProps ",state,props)
        return null;
    }

    shouldComponentUpdate()
    {
        console.log("update2 shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("update2 getSnapshotBeforeUpdate")
        return null;
    }
    


    render() {
        console.log("update2 render")
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        );
    }

    componentDidUpdate()
    {
        console.log("update2 componentDidUpdate")
    }
}

export default LifeCycleCompUpdate2;