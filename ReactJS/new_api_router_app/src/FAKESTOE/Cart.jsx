import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Cart = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('https://fakestoreapi.com/carts').then(({data})=>{
            console.log(data)
            setTodos(data)
        todos.forEach((todo)=>{
            // var products
          var myTr = document.createElement("tr") ;

           for(var a in todo ) {
        if( a !== "products"){
            var  myTd = document.createElement("td") ;
            myTd.innerHTML = todo[a]
              myTr.append(myTd)
        }
           }
          var mytbody =  document.querySelector("tbody")
           mytbody.append(myTr)

        })
        })
    },[])
    return <div>
        {console.log(todos)}
      {/* {todos.map((e)=>{
      return  <li>{e.date}</li>
      })} */}
     <div className="container">
         <div className="row">
         <table>
          <thead>
              <tr>
                  <td>id</td>
                  <td>usersid</td>
                  <td>date</td>
                  <td>__v</td>
              </tr>
          </thead>
          <tbody>

          </tbody>
      </table>
         </div>
     </div>
    </div>
}