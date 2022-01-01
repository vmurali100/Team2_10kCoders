import React, { useState } from "react";
import { HomeCompE } from "./HomeCompE";
import { UserProviderE } from "./PostsContextE";

export const ContainerE = () => {
  const [message, setmessage] = useState("Welcome to React Context .....");
  const [post, setpost] = useState( {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  })
  
  return (
    <div>
      <UserProviderE value={post}>
        <h3 style={{color:'blue'}}>Hello From Container Comp</h3>
        <HomeCompE message={message} />
      </UserProviderE>
    </div>
  );
};