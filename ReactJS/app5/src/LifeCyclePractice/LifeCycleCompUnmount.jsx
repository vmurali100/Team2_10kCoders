import React, { Component } from 'react';

class LifeCycleCompUnmount extends Component {
    componentWillUnmount()
    {
        console.log("Unmount1 componentWillUnmount")
    }

    render() {
        return (
            <div>
                Will Unmount if count increased to 3
            </div>
        );
    }
}

export default LifeCycleCompUnmount;