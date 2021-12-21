import React, { Component } from 'react';
import LifeCycleCompUpdate from './LifeCycleCompUpdate';
import LifeCycleCompUnmount from './LifeCycleCompUnmount';

class LifeCycleCompMounting extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count:0
        };
        console.log("Mount1 constructor")

    }
    static getDerivedStateFromProps(state,props)
    {
        console.log("Mount1 getDerivedStateFromProps",state,props);
        return null;
    }

    countUpdate = () =>
    {
        this.setState({count:this.state.count+1});
    }

    render() {
        console.log("Mount1 render");
        return (
            <div>
                <hr/>
                <h1>This is component 1</h1>
                <LifeCycleCompUpdate count={this.state.count} />
                {this.state.count<3 && <LifeCycleCompUnmount />}
                <button onClick={this.countUpdate}>Increase by 1</button>
                <hr/>
            </div>
        );
    }
    componentDidMount()
    {
        console.log("Mount1 componentDidMount");
    }
}

export default LifeCycleCompMounting;