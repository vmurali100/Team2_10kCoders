import React, { useEffect, useState } from "react";
import axios from "axios";

function Placeholder1fun() {
  const urlCom = "http://jsonplaceholder.typicode.com/comments";
  const urlPos = "http://jsonplaceholder.typicode.com/posts";
  const urlAlb = "http://jsonplaceholder.typicode.com/albums";
  const urlPho = "http://jsonplaceholder.typicode.com/photos";
  const urlTodo = "http://jsonplaceholder.typicode.com/todos";
  const urlUser = "http://jsonplaceholder.typicode.com/users";

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(urlCom).then(({ data }) => {
      setComments(data);
    });
    axios.get(urlPos).then(({ data }) => {
      setPosts(data);
    });
    axios.get(urlAlb).then(({ data }) => {
      setAlbums(data);
    });
    axios.get(urlPho).then(({ data }) => {
      setPhotos(data);
    });
    axios.get(urlTodo).then(({ data }) => {
      setTodos(data);
    });
    axios.get(urlUser).then(({ data }) => {
      setUsers(data);
    });
  }, []);
return (
  <div className="col">
    <h2>Function Placeholder/comments</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <thead>
        {comments.map((comment) => {
          return <tr>{comment.id < 10 && <td>{comment.email}</td>}</tr>
        })}
      </thead>
    </table>
    <h2>Function Placeholder/posts</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Post Title</th>
        </tr>
      </thead>
      <thead>
        {posts.map((post) => {
          return <tr>{post.id < 10 && <td>{post.title}</td>}</tr>
        })}
      </thead>
    </table>

    <h2>Function Placeholder/albums</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Album Name</th>
        </tr>
      </thead>
      <thead>
        {albums.map((album) => {
          return <tr>{album.id < 10 && <td>{album.title}</td>}</tr>
        })}
      </thead>
    </table>

    <h2>Function Placeholder/photos</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Photo</th>
        </tr>
      </thead>
      <thead>
        {photos.map((photo) => {
          return <tr>{photo.id < 10 && <td><img style={{ width: "100px", height: "100px" }} src={photo.url} /></td>}</tr>
        })}
      </thead>
    </table>

    <h2>Function Placeholder/todos</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>Todo Completed</th>
        </tr>
      </thead>
      <thead>
        {todos.map((todo) => {
          return <tr>{todo.id < 10 && <td>{todo.title}</td>}</tr>
        })}
      </thead>
    </table>

    <h2>Function Placeholder/users</h2>
    <table className="Table col-12">
      <thead>
        <tr>
          <th>User Name</th>
        </tr>
      </thead>
      <thead>
        {users.map((user) => {
          return <tr>{user.id < 10 && <td>{user.name}</td>}</tr>
        })}
      </thead>
    </table>
  </div>
);
      }
export default Placeholder1fun;
