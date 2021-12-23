import React, { useEffect, useState } from "react";
import axios from "axios";

function Placeholder1() {
  const url = "http://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState();

  useEffect(() => {
    axios.get(url).then(({ data }) => {});
  }, []);
  return (
    <div>
      <h1>Placeholder component</h1>
      <ul>{comments.map((comment) => {})}</ul>
    </div>
  );
}
export default Placeholder1;
