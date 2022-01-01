import React, { useState } from "react";
import { HomeComp } from "./HomeComp";
import { UserProvider } from "./UserContext";

export const ContainerComp = () => {
  const [message, setmessage] = useState("Welcome to React Context .....");
  const [contectMessage, setcontectMessage] = useState("Hello I am from Context Message")
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
      <UserProvider value={user}>
        <h3>Hello From Container Comp</h3>
        <HomeComp message={message} />
      </UserProvider>
    </div>
  );
};