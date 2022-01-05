import React ,{ Component } from 'react'
import {connect} from 'react-redux'

class Student extends Component{
render(){
    console.log(this.props)
    return (
        <div id='mydiv'>
            {this.props.students.map((e)=>{
                return <li key={e} >{e}</li>
            })} <hr />
            {this.props.items.map((e)=>{
                return <li key={e} >{e}</li>
            })} <hr />
            {this.props.cart.map((e)=>{
                return <li key={e} >{e}</li>
            })} <hr /> 
            {this.props.products.map((e)=>{
                return <li key={e} >{e}</li>
            })}
        </div>
    )
}
}
function mapStateToProps(state){
return {
    students : state.students ,
    items : state.items ,
    products : state.products , 
    cart : state.cart 
}
}
export default connect(mapStateToProps)(Student)