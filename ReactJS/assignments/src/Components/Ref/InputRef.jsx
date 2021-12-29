import React, { Component } from 'react';

class InputRef extends Component {
    constructor(props)
    {
        super(props);
        this.inputRef = React.createRef();
    }
    render() {
        return (
            <div>
                <label>Input box   </label>
                <input type="text" ref={this.inputRef}/>
            </div>
        );
    }
    componentDidMount()
    {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
    }
}

export default InputRef;