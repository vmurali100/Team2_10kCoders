import axios from 'axios';
import React, { useState,useEffect } from 'react'

export const Admin = () => {
 const[user,setuser]= useState({
   email:"",
   password:""
 })
 const[districts,setdistricts]=useState([])
 const[isadmin,setisadmin]=useState(false);
 const [isadd, setisadd] = useState(false)
 const[isaddcon,setisaddcon]=useState(false)
 const [districtName,setdistrictName] = useState("")
const [constituency, setconstituency] = useState("")
 useEffect(() => {
  const isadmin=localStorage.getItem('isadmin') 
  if(isadmin){
 setisadmin(isadmin)
  }else{
    setisadmin(false)
  }
 getdistrictdetails() 
 }, [])
 
 const handlechange=(e)=>{
   let newuser={...user}
   newuser[e.target.name]=e.target.value
   setuser(newuser)
 }
 const handlesubmit=async()=>{
  let alladmin=await getadmin()
  let admin=alladmin.find((ad)=>ad.email==user.email) 
  if(admin){
    localStorage.setItem('isadmin',true)
    setisadmin(true)
  }else{
    setisadmin(false)
  }
 }
 const getdistrictdetails=()=>{
  axios.get("http://localhost:3000/districts").then((info)=>{
    info.data.forEach((dist)=>{
      dist.isaddcon=false
        })
        console.log(info.data)
    setdistricts(info.data)
 })
 }
 const getadmin=()=>{
   return new Promise((resolve,reject)=>{
axios.get("http://localhost:3000/admin").then((res)=>{
  
  resolve(res.data)
  console.log(res.data)
 
  
})
  
   })
 }
const handledelete=(dist)=>{
let del=districts.filter((dis)=>dis!==dist)
setdistricts(del)
// axios.delete("http://localhost:3000/districts/"+dist.id).then(()=>{
//   getdistrictdetails()
// })
}
const handleadddistrict=()=>{
  let constituencies=[]
  let newdistrict={
districtName,
constituencies
  }
  axios.post("http://localhost:3000/districts",newdistrict).then(()=>{
    setisadd(!isadd)
    getdistrictdetails();
  })
}
const getconstituencies=(constituencies)=>{
return <ul>{constituencies.map((con)=>{
return<li>{con}</li>
})}</ul>
}
const handleaddconst=(district,i)=>{
  setconstituency("")
console.log(district)
let alldistricts=[...districts]
let newdistrict={...district}
newdistrict.isaddcon=true
alldistricts[i]=newdistrict
setdistricts(alldistricts)
}
const addconstituency=(dist)=>{
console.log(dist)
dist.constituencies.push(constituency)
axios.put("http://localhost:3000/districts/"+dist.id,dist).then(()=>{
  getdistrictdetails()
})
}
  return (
    <div>
      {
        !isadmin?<div>
 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" value={user.email}
     onChange={(e)=>{handlechange(e)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={user.password}
    onChange={(e)=>{handlechange(e)}}/>
  </div>
 
  <button type="button" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>  
        </div>:<div>
          <h2>adminarea</h2>
          <button  className="btn btn-primary" onClick={()=>{setisadd(!isadd)}}>add district</button>
          <br/>
          {isadd&&<form>
            <label htmlFor=''>districtname:</label>
            <input type="text" name="districtName" onChange={(e)=>{setdistrictName(e.target.value)}} />
            <button type="button" className="btn btn-primary m-2" onClick={handleadddistrict}>add</button>
          </form>}
           {!isadd&& (
          
          <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">districtname</th>
              <th scope="col">constituencies</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((dist,i)=>{
              return <tr>
                <td>{i+1}</td>
                <td>{dist.districtName}</td>
                <td>{getconstituencies(dist.constituencies)}</td>
                <td>
                 {!dist.isaddcon?<button className='btn btn-success' onClick={()=>{handleaddconst(dist,i)}}>add constituencies</button>:
                 <div>
                   <input type="text" name="" value={constituency} onChange={(e)=>{setconstituency(e.target.value)}}/>
                   <button onClick={()=>{addconstituency(dist)}} className="btn btn-primary m-4">add</button>
                   </div>} 
                </td>
              </tr>
            })}
          </tbody>
        </table>
)}
        </div>
        }
     
    </div>
  )
}
