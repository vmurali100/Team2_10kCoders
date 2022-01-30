import axios from "axios";
import React, { useState ,useEffect} from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Admin = ()=>{
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"><button type="button"><Link to="admin">Admin</Link></button></div>
            </div>
        </div>
    </div>
}

export const AdminDash =()=>{
const [admin , setAdmin ] = useState({
    email : "" ,
    password : ""
});

const navigate =useNavigate();
const handlechange = (e)=>{
    let newuser = {...admin} ;
    newuser[e.target.name] = e.target.value ;
   setAdmin(newuser)
   
} ;


const getAdminProm = ()=>{
    return new Promise ((resolve ,reject)=>{
        axios.get('http://localhost:3000/admin').then(({data})=>{
            resolve(data)
            console.log(data)
    })
    
   
    })
}
const getadmin = async ()=>{
    console.log(admin)
let adminhere = await getAdminProm();
console.log(adminhere)
if(admin.email === adminhere.email && admin.password === adminhere.password){
    navigate("/admindashboard")
  }else {
      console.log("wrong")
  }
}
    return <div>
          <div className="container" style={{"marginTop" : "80px"}}> 
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                <form className="loginform">
                    <h2> Admin Log In</h2>
  <div class="mb-3">
    <label  class="form-label">Email address</label>
    <input type="email" class="form-control" value={admin.email} onChange={(e)=>{handlechange(e)}} name="email" />
    </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" value={admin.password} onChange={(e)=>{handlechange(e)}} name="password" />
  </div>
  
  <button type="button" class="btn btn-primary" onClick={getadmin}>Log In</button> 
  
</form> 
</div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
}

export const Admindashboard =()=>{
  const navigate = useNavigate()

  const getuserlist =()=>{
        navigate("/admindashboard/userslist")
   }
    return <div>
       <div className="container">
           <div className="row">
               <div className="col-4"></div>
               <div className="col-4"> 
               <button type="button" onClick={getuserlist}>GET USERS</button><button  type="button" ><Link to="districtslist">GET DISTRICTS</Link></button> 
               {/* <button  type="button"><Link to="addnew">ADD NEW DISTRICT DETAILS</Link></button> */}
               </div>
               <div className="col-4"></div>
           </div>
       </div> <br />
     
    </div>
}



export const DistrictsList = ()=>{
    const [distlist , setDistlist] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/districtslist").then(({data})=>{
            setDistlist(data) ;
            console.log(data)
           
         
        })
        
       
    },[])
    const getDists = ()=>{
        distlist.forEach((user)=>{
            var myTr = document.createElement("tr");
            var mytbody = document.querySelector("tbody");
            
            for (var a in user){
                if ( a != "constiuencies" && a != "id"){
                     var myTd = document.createElement("td");
                     var  myb = document.createElement("b");
                     myb.innerHTML = user[a] ;
                 
                     myTd.append(myb)
                     myTr.append(myTd)
                     myTr.style.border = "2px solid"
                     myTd.style.border = "2px solid"
                } else if ( a == "constiuencies" && a != "id"){
                    user.constiuencies.map((as)=>{
                        var myTd = document.createElement("td")
                        myTd.innerHTML = as ;
                        myTr.append(myTd)
                        myTr.style.border = "2px solid"
                    })
                 }
              
            }
               var myTdet = document.createElement("td")
                 var editBtn = document.createElement("button") ;
                 editBtn.innerHTML = "edit" ;
                 editBtn.setAttribute('className' , 'btn btn-warning');
                 // editBtn.addEventListener('onclick' , )
                 myTdet.append(editBtn);
                 myTr.append(myTdet)
                 mytbody.append(myTr);
                 editBtn.addEventListener()

                 var myTddt = document.createElement("td")
                 var deleteBtn = document.createElement("button") ;
                 deleteBtn.innerHTML = "Delete" ;
                //  myTddt.classList.add('btn btn-warning');
                
                 // editBtn.addEventListener('onclick' , )
                 myTddt.append(deleteBtn);
                 myTr.append(myTddt)
                 mytbody.append(myTr)
          
        })
    }
    const handleEdit = ()=>{
        
    }
    return <div>
    <h1>USERS LIST</h1>
    
    <div className="container" >
           <div className="row">
               <div className="col-1"></div>
               <div className="col-10"> 
               <button type="button" onClick={ getDists}>get districts list</button>
              <table style={{"border" : "2px solid" , "marginTop" : "40px"}}>
                 
                  <thead style={{"border" : "2px solid"}}>
                      <tr style={{"border" : "2px solid"}}>
                          <td style={{"border" : "2px solid"}}> <h4><b>DISTRICT</b></h4> </td>
                          <td style={{"border" : "2px solid"}} colSpan={8}> <h4><b>CONTUENCY</b></h4> </td>
                          <td colSpan={2}>Manage</td>
                      </tr>
                  </thead>
                  <tbody>

                  </tbody>
              </table>
               </div>
               <div className="col-1"></div>
           </div>
           <div className="row" style={{ "marginTop" : "40px"}}>
               {/* <button>EDIT</button>
               <button>DELETE</button> */}
              <div className="col-4"></div>
              <div className="col-4"> <button><Link to="/admindashboard/addnew">ADD NEW DIST</Link></button></div>
              <div className="col-4"></div>
           </div>
       </div>
    </div>
}

export const AddNewDist = ()=>{
    const [addnew , setaddNew] = useState({
        dist : "" ,
        // consti : [],
       
    })
    const [area ,setArea] = useState("")
    const handleChange1 =(e)=>{
        let newone = {...addnew};
        
        newone[e.target.name] = e.target.value ;
    
        setaddNew(newone);
    }
    const handleChange2 =(e)=>{
      
       setArea(e.target.value)
      
    }
   const addnewdistFunc =()=>{
       var constiuencies = [];
       var constiClone = [...constiuencies];
       constiClone.push(area)
   var addnewone = {...addnew}  
   Object.assign(addnewone , constiClone)
      axios.post("http://localhost:3000/districtslist" , addnewone ).then(({data})=>{
          console.log(data)
      })
    console.log(addnew)
   }

    return <div>
    <h1>Add New Dist</h1>
    <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4"><form>
  <div class="mb-3">
    <label class="form-label">District</label>
    <input type="text" class="form-control" value={addnew.dist} name="dist" onChange={(e)=>handleChange1(e)} />
  </div>
  <div class="mb-3">
    <label  class="form-label">Constuencey</label>
    <input type="text" class="form-control" value={area}  name="area" onChange={(e)=>handleChange2(e)}/>
  </div>
 <button type="button" class="btn btn-primary" onClick={addnewdistFunc}>ADD</button>
</form></div>
            <div className="col-4"></div>
        </div>
    </div>
    </div>
}