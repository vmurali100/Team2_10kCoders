import React, { useState } from "react";
import { UserProviderD } from "./CommentsContextD";
import { HomeCompD } from "./HomeCompD";

export const ContainerD = () => {
  const [message, setmessage] = useState("Welcome to React Context .....");
  const [comments, setComments] = useState( {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  })
  
  return (
    <div>
      <UserProviderD value={comments}>
        <h3 style={{color:'blue'}}>Hello From Container Comp</h3>
        <HomeCompD message={message} />
      </UserProviderD>
    </div>
  );
};