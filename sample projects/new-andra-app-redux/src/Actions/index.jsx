import React from "react";
import axios from "axios";
import { ADDNEWDIST, ADMIN_LOGIN_DATA, EDIT_DIST, GET_CONST_ANSWER, GET_DISTRICTS_DATA, GET_USERS_DATA, LOGIN_DATA, LOG_OUT_USER, SIGNUP_DATA } from "./Action_Types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// export  const getDistrictsDataAction = ()=>{
//     return (dispatch)=>{
//         axios.get('http://localhost:3000/districtslist').then(({data})=>{
//             dispatch({
//                     type : GET_DISTRICTS_DATA ,
//                     payload : data , 
                   
//                  })
                 
//                 })}}

export const GetConstAction =(input ,loggedUser , nav)=>{
    // const loggedUser =useSelector((state)=>state.loggedUser);
    // const nav = useNavigate("login")
    return (dispatch)=>{
      if(loggedUser != null)
      {
        axios.get('http://localhost:3000/districtslist').then((res)=>{
            console.log(res.data)
            // let data = res.data
          let dist =  res.data.find(d=>d.constiuencies.indexOf(input) > -1) ;
          console.log(dist.district)
          dispatch({
              type : GET_CONST_ANSWER,
              payload : dist.district
          })
    }
         )}
         else {
            alert("kindly log in to view the results")  
          nav()
         }
       }}

export const SignupAction =(user ,x)=>{
    // const navigate = useNavigate();
    return (dispatch)=>{
        axios.post("http://localhost:3000/user" , user).then(({data})=>{ 
        console.log(data , user) 
        dispatch({
            type : SIGNUP_DATA ,
            payload : data
        })});
       alert("Registration succesfull ....!")  
        x() ;
       
    }
}

export const LoginAction =(user ,reg ,hm )=>{
    // let usersList = useSelector((state)=> state)
    return async(dispatch)=>{
       await axios.get('http://localhost:3000/user').then(({data})=>{
       console.log(data)
       {
        if(data.length == 0) {
            window.alert("Not Registered ..... please Register and Login Again")
            reg()
          } else  {
            let logged = data.find( myus => myus.email == user.email && myus.password  == user.password) ;
            if(logged){
              localStorage.setItem("loggedUser" , JSON.stringify(user));
          alert("Login successfull......!")
              hm()
          
            }else{
              window.alert("Not Registered ..... please Register and Login Again");
              reg()
            }
          }
    }
   dispatch ({
        type : LOGIN_DATA ,
        payload : user
    })
        })
    }
   
}
export const SetlogoutUser =(x)=>{
    return {
        type : LOG_OUT_USER,
        payload : {}
    }
    
}
export const AdminLogInAction =(admin ,x)=>{
    return async (dispatch) =>{
       await axios.get("http://localhost:3000/admin").then(({ data }) => {
           console.log(data);
           if (
            admin.email === data.email &&
            admin.password === data.password
          ) {
            x();
            alert(`${admin.email} has sucessfully logged in`)
          } else {
            console.log("you are not registered admin .....!");
          }
          dispatch ({
              type : ADMIN_LOGIN_DATA ,
              payload : admin
          })
    })
}
}
export const GetDistrictsListAction =()=>{
  return async (dispatch)=>{
  await axios.get("http://localhost:3000/districtslist").then(({ data }) => {
   console.log(data);
   dispatch({
     type : GET_DISTRICTS_DATA ,
     payload : data
   })
  })
}
}
export const GetUserListAction =()=>{
  return  async (dispatch)=>{
    await   axios.get("http://localhost:3000/user").then(({ data }) => {
     console.log(data);
     dispatch({
       type : GET_USERS_DATA ,
       payload : data
     })
    })
  }
}

export const HandleEditAction =(d,x)=>{
  x()
  return {
    type :EDIT_DIST ,
    payload : d
  }
 
}
export const UpdateAction=(newd ,id , x)=>{
  return async (dispatch)=>{
    await axios.put(`http://localhost:3000/districtslist/${id}` , newd).then(({data})=>{
      console.log(data)
    })
    x()
    GetDistrictsListAction()
  }
}
export  const  DeleteAction =(id ,x)=>{
  return async (dispatch)=>{
    await axios.delete(`http://localhost:3000/districtslist/${id}`).then(({data})=>{
      console.log(data)
      
    })
   
    
   
  }
}

export const AddnewdistAction =(newdist ,x)=>{
  return async dispatch =>{
 await  axios.post("http://localhost:3000/districtslist", newdist).then(({ data }) => {
   console.log(data);
   dispatch({
     type :ADDNEWDIST ,
     payload : data
   })
   x()
 });

  }
  
}