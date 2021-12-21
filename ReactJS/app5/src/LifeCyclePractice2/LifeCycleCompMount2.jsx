import React, { Component } from 'react';
import LifeCycleCompUnmount2 from './LifeCycleCompUnmount2';
import LifeCycleCompUpdate2 from './LifeCycleCompUpdate2';

class LifeCycleCompMounti2 extends Component {

    constructor(props)
    {
        super(props);
        this.state = {count:0};
        console.log("mount2 constructor")
    }

    static getDerivedStateFromProps(state,props)
    {
        console.log("mount2 getDerivedStateFromProps ",state, props)
        return null;
    }

    decrease=()=>
    {
        this.setState({count:this.state.count - 1})
    }
    render() {
        console.log("mount2 render");
        return (
            <div>
                <h1>This is component 2</h1>
                <LifeCycleCompUpdate2 count={this.state.count}/>
                {this.state.count > -2 && <LifeCycleCompUnmount2 />}
                <button onClick={this.decrease}>Decrease by 1</button>
                <hr/>
            </div>
        );
    }

    componentDidMount()
    {
        console.log("mount2 componentDidMount");
    }
}

export default LifeCycleCompMounti2;