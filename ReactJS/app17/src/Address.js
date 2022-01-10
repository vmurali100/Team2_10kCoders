import { Component } from "react";
import { connect } from "react-redux";
import { handle_data } from "./redux/action";

class Address extends Component{
    
    getdata=()=>{
        this.props.dispatch(handle_data())
    }
    redner(){
       
        return <div>
            {this.props.Address.address.map((t)=>{
                return <h1 key={t.id}>{t.id}</h1>
            })}
        </div>
    }
}
function hello(state){
    return{
        Address:state.Address
    }
}
export default connect(hello)(Address)