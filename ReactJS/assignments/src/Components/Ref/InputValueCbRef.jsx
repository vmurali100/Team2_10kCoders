import React, { Component } from 'react';

class InputValueCbRef extends Component {
    constructor()
    {
        super();
        this.cbRef = null;
        this.setCbRef = (element)=>{
            this.cbRef = element;
        }
    }
    handleButton = ()=>{
        alert(this.cbRef.value);
    }
    render() {
        return (
            <div>
                <label>(Call back)Enter value and hit submit</label>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.handleButton}>Submit</button>
            </div>
        );
    }
}

export default InputValueCbRef;