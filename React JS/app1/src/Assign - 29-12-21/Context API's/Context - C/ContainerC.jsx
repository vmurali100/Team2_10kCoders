import React, { useState } from "react";
import { UserProviderC } from "./CartContextC";
import { HomeCompC } from "./HomeCompC";

export const ContainerC = () => {
  const [message, setmessage] = useState("Welcome to React Context .....");
  const [cart, setCart]= useState({"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0})
  
  return (
    <div>
      <UserProviderC value={cart}>
        <h3 style={{color:'blue'}}>Hello From Container Comp</h3>
        <HomeCompC message={message} />
      </UserProviderC>
    </div>
  );
};