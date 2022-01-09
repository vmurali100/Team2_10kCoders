import React,{Component} from "react"
import {connect} from "react-redux"
class Todos extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.todo.map((td)=>{
                    return <p key={td.title}>{td.title}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        todo:state.todo
    }
}
export default connect(mapStateToProps)(Todos)