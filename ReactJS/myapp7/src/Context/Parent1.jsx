import React, { useState } from "react";
import { Child } from "./Child";
import { UserProvider } from "./Context";
import { Parent2 } from "./Parent2";
export const Parent1 = () => {
  const [Name, setName] = useState("akhil varma");
  const [age, setAge] = useState("25");
  const [zip, setZip] = useState(506001);
  const [filltext, setFilltext] = useState([
    {
      fname: "Freddy",
      lname: "Mcdonald",
      tel: "(283)665-7415",
      address: "5458 Curabitur Dr",
      city: "Raleigh",
      state: "WA",
      zip: 81906,
    },
    {
      fname: "Karla",
      lname: "Flores",
      tel: "(606)204-2694",
      address: "2072 Vel Dr",
      city: "Rachel",
      state: "OK",
      zip: 18695,
    },
    {
      fname: "Earnest",
      lname: "Looper",
      tel: "(382)300-5658",
      address: "7634 Scelerisque Ln",
      city: "Hewitt",
      state: "ND",
      zip: 19572,
    },
    {
      fname: "Sean",
      lname: "Mccracken",
      tel: "(929)361-1997",
      address: "4542 Et Ln",
      city: "Joliet",
      state: "SC",
      zip: 45215,
    },
    {
      fname: "Dina",
      lname: "Sidaway",
      tel: "(900)583-9326",
      address: "6540 Augue Rd",
      city: "Boston",
      state: "GA",
      zip: 98820,
    },
  ]);
  return (
    <div>
      <UserProvider value={filltext}>
        <h3>Hello From parent 1 Comp</h3>
        <Child />
      </UserProvider>
    </div>
  );
};
