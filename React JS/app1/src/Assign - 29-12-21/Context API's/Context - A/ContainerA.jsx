import React, { useState } from "react";
import { HomeCompA } from "./HomeCompA";
import { UserProvider } from "./UsersContext";

export const ContainerA = () => {
  const [message, setmessage] = useState("Welcome to React Context .....");
  const [user, setuser] = useState({
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
    lat: "-37.3159",
    lng: "81.1496"
    }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
    }
    })
  
  return (
    <div>
      <UserProvider  value={user}>
        <h3 style={{color:'blue'}}>Hello From Container Comp</h3>
        <HomeCompA message={message} />
      </UserProvider>
    </div>
  );
};