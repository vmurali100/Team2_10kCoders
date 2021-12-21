import React, { Component } from 'react';

class LifeCycleCompUpdate extends Component {
    constructor(props)
    {
        console.log("update1 constructor")
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(state, props)
    {
        console.log("update1 getDerivedStateFromProps ",state, props)
        return null
    }

    shouldComponentUpdate()
    {
        console.log("update1 shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("update1 render")
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        );
    }
    getSnapshotBeforeUpdate()
    {
        console.log("update1 getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate()
    {
        console.log("update1 componentDidUpdate")
    }
}

export default LifeCycleCompUpdate;