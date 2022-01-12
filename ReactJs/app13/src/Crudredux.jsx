import React, { Component } from "react"
import { connect } from "react-redux"
import { addUseractions, deleteUseractions, updateUseractions } from "./crudredux/redux/actions"


class Users_redux extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: ""
            },
            users: [{fname:"abc"},{fname:"bca"},{fname:"cad"}],
            index: null
        }
        console.log(props)
    }

    handleAddUser = () => {
        // let AllUsers = [...this.state.users]
        // AllUsers.push(this.state.user)
        // this.setState({ users: AllUsers })
        // this.handleClear()
        
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser })

    }
    handleClear = () => {
        this.setState({
            user: {
                fname: ""
            },
index:null
        })
    }
    handleEditUser = (user, i) => {
        this.setState({ user, index: i })
    }
    handleUpdate = () => {
        // let AllUsers = [...this.state.users];
        // AllUsers[this.state.index] = this.state.user;
        // this.setState({ users: AllUsers, index: null });
        let updatedUser={...this.state.user}
        updatedUser["id"]=this.state.index;
        this.props.updateUserfunc(updatedUser)
        this.handleClear()

    }
    handleDelete = (user) => {
        let AllUsers = [...this.state.users];
        this.setState({ users: AllUsers.filter((au) => au.fname !== user.fname) })
        this.handleClear()

    }
    render() {
        const{addUserfunc,deleteUserfunc,updateUserfunc}=this.props
        return (
            <div>
                <h3>
                    hello
                </h3>
                <form>
                    <label htmlFor="fname">firstname:</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => { this.handleChange(e) }} />
                    {this.state.index
                        !== null ? (<button type="button" onClick={this.handleUpdate}>updateuser</button>)
                        : (<button type="button" onClick={()=>{addUserfunc(this.state.user)
                        this.handleClear()}}>adduser</button>)
                    }

                </form>
                <hr />
                {this.props.users.map((user, i) => {
                    return <p key={i}>
                        <span onClick={() => { this.handleEditUser(user, i) }} >{user.fname}</span>-<span onClick={() => {deleteUserfunc(user) }}>{""}X{""}</span></p>
                })}
            </div>
        )
    }

}
function mapStateToProps(state){
    console.log(state)
    return{
        users:state
    }
}
    function mapDispatchToProps(dispatch) {
        return {
           addUserfunc:(user)=>dispatch(addUseractions(user)),

           deleteUserfunc:(user)=>dispatch(deleteUseractions(user)),
           updateUserfunc:(user)=>dispatch(updateUseractions(user))


        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Users_redux)