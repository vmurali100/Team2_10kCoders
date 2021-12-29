import React, { Component } from 'react';

class CallbackRef extends Component {
    constructor(props)
    {
        super(props)
        this.cbRef = React.createRef();
        this.setCbRef = (element)=>{
            this.cbRef = element;
        }
    }
    render() {
        return (
            <div>
                <label>Callback input box</label>
                <input type="text" ref={this.setCbRef}/>
            </div>
        );
    }

    componentDidMount()
    {
        this.cbRef.focus();
    }
}

export default CallbackRef;