import { useState } from "react";

export const UserForm = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });

  const newuser = { ...user };
  const handlename = (e) => {
    let newinputfname = e.target.name;
    newuser[newinputfname] = e.target.value;
    setUser(newuser);
  };

  const { fname, lname } = user;
  const getuser = (e) => {
    console.log(user);
    document.getElementById("myp").innerHTML = fname + " " + lname;

    clear();
  };

  const clear = () => {
    setUser({
      fname: "",
      lname: "",
    });
  };
  return (
    <div id="myid">
      <form>
        <label htmlFor="fname">First Name</label> <br />
        <input
          type="text"
          name="fname"
          value={user.fname}
          placeholder="enter fname "
          onChange={(e) => {
            handlename(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="lname">Last Name</label> <br />
        <input
          type="text"
          name="lname"
          value={user.lname}
          placeholder="enter lname "
          onChange={(e) => {
            handlename(e);
          }}
        />
      </form>
      <p id="myp"></p>
      <button type="button" onClick={(e) => getuser(e)}>
        BUTTON
      </button>
    </div>
  );
};
