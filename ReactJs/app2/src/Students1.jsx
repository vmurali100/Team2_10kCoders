import React,{Component} from "react"
import {connect} from "react-redux"

class Students1 extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
{this.props.students.map((std)=>{
    return <p key={std.title}>{std.title}</p>
})}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        students:state.students
    }
}
export default connect(mapStateToProps)(Students1)