import React, { useEffect, useState } from "react";
import axios from "axios";

function Placeholder1fun() {
  const url = "http://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
        setComments(data)
    });
  }, []);
  return (
    <div className="col">
      <h2>Function Placeholder/comments</h2>
      <div className="table-responsive ms-5 me-5 m-auto">
      <table className="table">
        <thead>
            <tr>
            <th scope="col">PostId</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Body</th>
            </tr>
        </thead>
        <tbody>
        {
            comments.map((comment)=>
            {
                console.log(comment)
                return (<tr key={comment.id}>
                    <td>{comment.postId}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                    </tr>); 
            })
        }
        </tbody>
      </table>
      </div>
    </div>
  );
}
export default Placeholder1fun;
