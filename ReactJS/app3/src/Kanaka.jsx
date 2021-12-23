import { Component } from "react";
import Thanusha from "./Thanusha";

export class Kanaka extends Component {
    constructor() {
        super()
        this.state= {
            message: "i am parent Component",
            Flank: "i am wlcome component"
        }
    }
    render() {
        return<div>
            <Thanusha {...this.state}/>
            </div>
}
}