import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4">
            <button type="button">
              <Link to="admin">Admin</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminDash = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handlechange = (e) => {
    let newuser = { ...admin };
    newuser[e.target.name] = e.target.value;
    setAdmin(newuser);
  };

  const getAdminProm = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/admin").then(({ data }) => {
        resolve(data);
        console.log(data);
      });
    });
  };
  const getadmin = async () => {
    console.log(admin);
    let adminhere = await getAdminProm();
    console.log(adminhere);
    if (
      admin.email === adminhere.email &&
      admin.password === adminhere.password
    ) {
      localStorage.setItem("loggedAdmin", JSON.stringify(admin));
      navigate("/admindashboard");
    } else {
      console.log("wrong");
    }
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form className="loginform">
              <h2> Admin Log In</h2>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  value={admin.email}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  name="email"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  value={admin.password}
                  onChange={(e) => {
                    handlechange(e);
                  }}
                  name="password"
                />
              </div>

              <button type="button" class="btn btn-primary" onClick={getadmin}>
                Log In
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export const Admindashboard = () => {
  const navigate = useNavigate();

  const getuserlist = () => {
    navigate("/admindashboard/userslist");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <button type="button" onClick={getuserlist}>
              GET USERS
            </button>
            <button type="button">
              <Link to="districtslist">GET DISTRICTS</Link>
            </button>
            {/* <button  type="button"><Link to="addnew">ADD NEW DISTRICT DETAILS</Link></button> */}
          </div>
          <div className="col-4"></div>
        </div>
      </div>{" "}
      <br />
    </div>
  );
};

export const DistrictsList = () => {
  const [distlist, setDistlist] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/districtslist").then(({ data }) => {
      setDistlist(data);
      console.log(data);
    });
  }, []);

  const getDists = () => {
    axios.get("http://localhost:3000/districtslist").then(({ data }) => {
      setDistlist(data);
      console.log(data);
    });
  };

  function handleEdit(id) {
    localStorage.setItem("editabledist" , JSON.stringify(distlist[id-1]));
    console.log("clicked ", distlist[id-1]);
    navigate("/admindashboard/districtslist/edit")
  }
  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/districtslist/${id}` ).then(({data})=>{
      console.log(data);
  
  })
  getDists()
  
  };


  return (
    <div>
      <h1>Districts LIST</h1>

      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <button
              type="button"
              onClick={getDists}
              className="btn btn-primary"
            >
              get districts list
            </button>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            {distlist != null ? (
              <table style={{ border: "2px solid", marginTop: "40px" }}>
                <thead>
                  <tr>
                    <th style={{ border: "2px solid" }}>S.No</th>
                    <th style={{ border: "2px solid" }}>DISTRICT</th>
                    <th style={{ border: "2px solid" }}>CONTUENCY</th>
                    <th colSpan={2} style={{ border: "2px solid" }}>
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody>
                {distlist.map((d, i) => {
                  return (
                    <tr style={{ border: "2px solid" }}>
                     
                      <td style={{ border: "2px solid" }}>{d.id}</td>
                      <td style={{ border: "2px solid" }}>{d.dist}</td>
                      {d.constiuencies.map((e) => {
                        return (
                          
                           <tr>
                           <td key={e} style={{ paddingLeft: "10px" }}>
                              <li style={{ textAlign: "left" }}>{e}</li>
                            </td>
                           </tr>
                          
                        );
                      })}
                      <td key={d.id} style={{ border: "2px solid" }}>
                        {" "}
                        <button
                          type="button"
                          onClick={() => handleEdit(d.id)}
                          className="btn btn-warning"
                        >
                          Edit
                        </button>{" "}
                        <button
                          type="button"
                          onClick={(i) => handleDelete(d.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          {/* <button>EDIT</button>
               <button>DELETE</button> */}
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <button>
              <Link to="/admindashboard/addnew">ADD NEW DIST</Link>
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export const AddNewDist = () => {
  const [addnew, setaddNew] = useState({
    dist: "",
    // consti : [],
  });
  const [area, setArea] = useState("");
  const handleChange1 = (e) => {
    let newone = { ...addnew };

    newone[e.target.name] = e.target.value;

    setaddNew(newone);
  };
  const handleChange2 = (e) => {
    setArea(e.target.value);
  };
  const addnewdistFunc = () => {
    var constiClone = area.split(",")
    var constiuencies = [...constiClone];
    // constiuencies.push(area);
    var addnewone = { ...addnew , constiuencies};
    // Object.assign(addnewone, constiClone)
    axios
      .post("http://localhost:3000/districtslist", addnewone)
      .then(({ data }) => {
        console.log(data);
      });
    console.log(addnew);
  };

  return (
    <div>
      <h1>Add New Dist</h1>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form>
              <div class="mb-3">
                <label class="form-label">District</label>
                <input
                  type="text"
                  class="form-control"
                  value={addnew.dist}
                  name="dist"
                  onChange={(e) => handleChange1(e)}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Constuencey</label>
                <input
                  type="text"
                  class="form-control"
                  value={area}
                  name="area"
                  onChange={(e) => handleChange2(e)}
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                onClick={addnewdistFunc}
              >
                ADD
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export  const Edit =()=>{
 const [dis ,setDis ] = useState({});
 const [constu ,setConstu] = useState("")
 const [addnew, setaddNew] = useState({
  dist: "",
  // consti : [],
});
const navigate = useNavigate()
const [area, setArea] = useState("");

const handlechange1 = (e) => {
  let newone = { ...addnew };

  newone[e.target.name] = e.target.value;

  setaddNew(newone);
};
const handlechange2 = (e) => {
  setArea(e.target.value);
};

 
 var d
  useEffect(()=>{
   d = JSON.parse(localStorage.getItem("editabledist"));
   setDis(d);
  //  localStorage.clear();
  //  console.log("here we are displaying d", d);
   setConstu(d.constiuencies.toString(","))
  // let dummy = {...dis ,constu };
 for (var a in d)
 {
 if( a != "id"){
  document.getElementById(a).value = d[a]
 }
 }
  // document.getElementById(dis[a]).value = dummy[a]; 
  },[]);
 var index 
  const updatedistrict =(id ,d)=>{
  //   var constiClone = constu.split(',')
  //   var constiuencies = [...constiClone];
  //   // constiuencies.push(area);
  //   var addnewone = { ...addnew , constiuencies};
  // //  let constiuencies = constu.split(',')
  // //  console.log(constiuencies)
  // //  let newdis= {...dis , constiuencies };
  // //  console.log(newdis);

  console.log(dis)
  let newd = {...dis}
  for (var a in dis){
   if( a != "id" && a != "constiuencies"){
    newd[a] =document.getElementById(a).value ;
   } else if ( a == "constiuencies"){
    newd[a] = document.getElementById(a).value.split(',');
    // var constiuencies = [...constiClone];
    

   }
  }
  console.log(newd)
  console.log(id)
   axios.put(`http://localhost:3000/districtslist/${id}` , newd).then(({data})=>{
     console.log(data)
   });
   navigate("/admindashboard/districtslist")
  }
 
  return <div>
     <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
           {dis != null ?  <form className="loginform">
              <h2>Update District Details</h2>
              <div class="mb-3">
                <label class="form-label">District</label>
                <input
                  type="text"
                  class="form-control"
                  // value={addnew.dist}
                  onChange={(e) => {
                    handlechange1(e);
                  }}
                  name="district"
                  id="dist"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Contiuency</label>
                <input
                  type="text"
                  class="form-control"
                  id="constiuencies"
                  onChange={(e) => {
                    handlechange2(e);
                  }}
                  name="constiuency"
                  // value={area}
                />
              </div>

              <button type="button" class="btn btn-primary" onClick={()=>updatedistrict(dis.id)}>
                Update
              </button>
            </form> : ""}
          </div>
          <div className="col-4"></div>
        </div>
      </div>
  </div>
}