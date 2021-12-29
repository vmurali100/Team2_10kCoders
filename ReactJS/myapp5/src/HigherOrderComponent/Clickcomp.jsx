import React ,{ Component } from "react";
import {HOC} from "./HOC"

class Clickcomp extends Component {
    render() {
        return <div>
            {this.props.count } <br />
            <button onClick={this.props.handle}>click </button>
        </div>
    }
}
export default HOC(Clickcomp);