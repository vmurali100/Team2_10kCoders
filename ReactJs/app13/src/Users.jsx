import React, { Component } from "react"
import { connect } from "react-redux"
import { createUsersActions, deleteUsersActions, getAllusersActions } from "./redux/actions";

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fname: "",
                lname: "",
                email: ""
            }

        }
        console.log(props)
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser })

    }
    handleClear = () => {
        let newUser = {
            fname: "",
            lname: "",
            email: ""
        }

        this.setState({ user: newUser })
    }
    handleCreate = () => {
        this.props.createUser(this.state.user)
        this.handleClear()
    }
    editUser = () => {

    }
    updateUser = () => {

    }
    getAllusersDetails = () => {
        this.props.getAllusers()
    }
    handleDelete = (user) => {
        this.props.deleteUser(user)
    }
    handleEdit=(user)=>{
this.setState({user});
    }
    
   
    render() {
        return (
            <div>
                <h2>hello from users component</h2>
                <form>
                    <label htmlFor="fname">firstname:</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="lname">lastname:</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <button type="button" onClick={this.handleCreate}>Add User</button>
                </form>
                {/* <button onClick={this.getAllusersDetails}>getusers</button>
                <button onClick={this.deleteUser}>deleteuser</button> */}
                {this.props.users && this.props.users.map((user,i) => {
                    return <p key={i}>{user.fname}-<button onClick={()=>this.handleEdit(user)}>edit user</button>  <button onClick={()=>{
                        this.handleDelete(user)
                    }}>delete user</button></p>

                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllusers())
    // }
}
function mapStateToProps(state) {
    return {
        users: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllusers: () => dispatch(getAllusersActions()),
        deleteUser: (user) => dispatch(deleteUsersActions(user)),
        createUser: (user) => dispatch(createUsersActions(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);