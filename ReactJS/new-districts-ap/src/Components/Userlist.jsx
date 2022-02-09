import axios from "axios";
import { useEffect, useState } from "react"

export const UsersList = ()=>{
    const [userslist , setUserslist] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then(({data})=>{
            setUserslist(data) ;
            console.log(data)
           
         
        })
        
       
    },[])
    const getuser = ()=>{
        userslist.forEach((user)=>{
            var myTr = document.createElement("tr");
            var mytbody = document.querySelector("tbody");
            
            for (var a in user){
                if ( a != "id"){
                     var myTd = document.createElement("td");
                     myTd.innerHTML = user[a] ;
                     myTr.append(myTd)
                }
            }
            mytbody.append(myTr)
        })
    }
    return <div>
    <h1>USERS LIST</h1>
    
    <div className="container">
           <div className="row">
               <div className="col-4"></div>
               <div className="col-4"> 
               <button type="button" onClick={ getuser}>get users list</button>
              <table>
                 
                  <thead>
                      <tr>
                          <td>Email</td>
                          <td>Password</td>
                      </tr>
                  </thead>
                  <tbody>

                  </tbody>
              </table>
               </div>
               <div className="col-4"></div>
           </div>
       </div>
    </div>
}