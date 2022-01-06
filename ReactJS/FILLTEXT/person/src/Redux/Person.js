import React ,{ Component } from "react";
import { connect } from "react-redux";
import getPerson from "./Action";

class Person extends Component {
    render(){
        this.props.dispatch(getPerson())
        console.log(this.props)
        return <div>
            {this.props.person.map((e)=>{
                return <h1 key={e.fname}>{e.address}</h1>
            })}
        </div>
    }
}const mapStateToProps = (state) =>{
    return {
        person : state.personDetails
    }
}

export default connect(mapStateToProps)(Person)