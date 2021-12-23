import axios from "axios";
import React, { Component } from "react";

class Placeholder1class extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      posts: [],
      albums: [],
      photos: [],
      todos: [],
      users: []
    };
  }

  render() {
    return (
      <div className="col">
        <h2>Class Placeholder/comments</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>Comment Name</th>
            </tr>
          </thead>
          <thead>
            {this.state.comments.map((comment) => {
              return <tr>{comment.id < 10 && <td>{comment.name}</td>}</tr>
            })}
          </thead>
        </table>

        <h2>Class Placeholder/posts</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>Post Title</th>
            </tr>
          </thead>
          <thead>
            {this.state.posts.map((post) => {
              return <tr>{post.id < 10 && <td>{post.title}</td>}</tr>
            })}
          </thead>
        </table>

        <h2>Class Placeholder/albums</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>Album Name</th>
            </tr>
          </thead>
          <thead>
            {this.state.albums.map((album) => {
              return <tr>{album.id < 10 && <td>{album.title}</td>}</tr>
            })}
          </thead>
        </table>

        <h2>Class Placeholder/photos</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>Photo</th>
            </tr>
          </thead>
          <thead>
            {this.state.photos.map((photo) => {
              return <tr>{photo.id < 10 && <td><img style={{width:"100px", height:"100px"}}src={photo.url}/></td>}</tr>
            })}
          </thead>
        </table>

        <h2>Class Placeholder/todos</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>Todo Completed</th>
            </tr>
          </thead>
          <thead>
            {this.state.todos.map((todo) => {
              return <tr>{todo.id < 10 && <td>{todo.title}</td>}</tr>
            })}
          </thead>
        </table>

        <h2>Class Placeholder/users</h2>
        <table className="Table col-12">
          <thead>
            <tr>
              <th>User Name</th>
            </tr>
          </thead>
          <thead>
            {this.state.users.map((user) => {
              return <tr>{user.id < 10 && <td>{user.name}</td>}</tr>
            })}
          </thead>
        </table>
      </div>
    );
  }

  componentDidMount() {
    const urlCom = "http://jsonplaceholder.typicode.com/comments";
    axios.get(urlCom).then((res) => {
      var newState = { ...this.state };
      newState["comments"] = res.data;
      this.setState(newState);
    });

    const urlPos = "http://jsonplaceholder.typicode.com/posts";
    axios.get(urlPos).then((res) => {
      var newState = { ...this.state };
      newState["posts"] = res.data;
      this.setState(newState);
    });

    const urlAlb = "http://jsonplaceholder.typicode.com/albums";
    axios.get(urlAlb).then((res) => {
      var newState = { ...this.state };
      newState["albums"] = res.data;
      this.setState(newState);
    });

    const urlPho = "http://jsonplaceholder.typicode.com/photos";
    axios.get(urlPho).then((res) => {
      var newState = { ...this.state };
      newState["photos"] = res.data;
      this.setState(newState);
    });

    const urlTodo = "http://jsonplaceholder.typicode.com/todos";
    axios.get(urlTodo).then((res) => {
      var newState = { ...this.state };
      newState["todos"] = res.data;
      this.setState(newState);
    });

    const urlUser = "http://jsonplaceholder.typicode.com/users";
    axios.get(urlUser).then((res) => {
      var newState = { ...this.state };
      newState["users"] = res.data;
      this.setState(newState);
    });
  }
}
export default Placeholder1class;
