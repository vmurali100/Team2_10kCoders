import axios from "axios";
import React, { useState, useEffect } from "react";

export const Admin = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [districts, setdistricts] = useState([]);
  const [isAdmin, setisAdmin] = useState(false);
  const [isADD, setisADD] = useState(false);
  const [isAddCont, setisAddCont] = useState(false);
  const [districtName, setdistrictName] = useState("");
const [constiency, setconstiency] = useState("");
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if(isAdmin){
      setisAdmin(isAdmin);
    }else{
      setisAdmin(false)
    }
    getDistrictDetails();
  }, []);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };

  const handleSubmit = async () => {
    let allAdmin = await getAdmin();
    let admin = allAdmin.find((ad) => ad.email == user.email);
    if (admin) {
      localStorage.setItem("isAdmin", true);
      setisAdmin(true);
    }else{
      setisAdmin(false);
    }
  };

  const getDistrictDetails = () => {
    axios.get("http://localhost:3000/districts").then((info) => {
      info.data.forEach((dist)=>{
        dist.isAddCont =false
      })
      console.log(info.data);
      setdistricts(info.data);
    });
  };
  const getAdmin = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/admin").then((res) => {
       
        resolve(res.data);
      });
    });
  };
  const handleDelete = (dist) => {
    axios.delete("http://localhost:3000/districts/" + dist.id).then(() => {
      getDistrictDetails();
    });
  };

  const handleAddDistrict = () => {
    let constituencies = [];
    let newDistrict = {
      districtName,
      constituencies,
    };
    axios.post("http://localhost:3000/districts/",newDistrict).then(()=>{
      setisADD(false)
      getDistrictDetails()
    })
  };
  const getconstituencies = (constituencies)=>{
    console.log(constituencies);
   return  <ul>
     {constituencies.map((con,i)=>{
       return <li key={i}>{con}</li>
     })}
   </ul>
  }

  const hanldeAddConst = (district,i)=>{
    setconstiency("")
    let allDistrincts = [...districts]
    let newDistrict = {...district}
    newDistrict.isAddCont = true
    allDistrincts[i]=newDistrict
    setdistricts(allDistrincts)
  }

  const addConstituency = (dist)=>{
    dist.constituencies.push(constiency)
    axios.put("http://localhost:3000/districts/"+dist.id,dist).then(()=>{
      getDistrictDetails()
    })
  }
  return (
    <div>
      {!isAdmin ? (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={user.password}
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Admin Area</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              setisADD(!isADD);
            }}
          >
            Add District
          </button>

          <br />

          {isADD && (
            <form>
              <label htmlFor="">District Name :</label>
              <input
                type="text"
                name="districtName"
                onChange={(e) => {
                  setdistrictName(e.target.value);
                }}
              />
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={handleAddDistrict}
              >
                Add{" "}
              </button>
            </form>
          )}
          {!isADD && (
            
            <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Distrinct Name</th>
                <th>Constituencies</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {districts.map((dist,i)=>{
                return <tr>
                  <td>{i+1}</td>
                  <td>{dist.districtName}</td>
                  <td>{getconstituencies(dist.constituencies)}</td>
                  <td>
                    {!dist.isAddCont ?  <button className="btn btn-primary" onClick={()=>{hanldeAddConst(dist,i)}}>Add Constituencies</button>:
                    <div>
                      <input type="text" onChange={(e)=>{setconstiency(e.target.value)}} value={constiency}/>
                      <button onClick={()=>{addConstituency(dist)}} className="btn btn-primary m-2">Add </button>
                    </div>
                    
                    }
                  </td>
                </tr>

              })}
            </tbody>
          </table>
          )}
        </div>
      )}
    </div>
  );
};
