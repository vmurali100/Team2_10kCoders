import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = ()=>{
   const [todos , setTodos ]  = useState([])
   useEffect( () =>{
        axios.get('https://fakestoreapi.com/products').then(({data})=>{
            console.log(data)
            setTodos(data)
        })
    },[])
    const handledata =()=>{
      
      todos.forEach((todo)=>{
          // var products
        var myTr = document.createElement("tr") ;

         for(var a in todo ) {
      if( a !== "rating" && a !== "image"){
          var  myTd = document.createElement("td") ;
          myTd.innerHTML = todo[a]
            myTr.append(myTd)
      }
      else if (a == "image" && a!=="rating")
      {
        var  myTd = document.createElement("td") ;
        var myImg = document.createElement("img")
        myImg.setAttribute( 'src' , todo[a])
        myImg.style.width = "150px"
          // myTd.innerHTML = todo[a]
          myTd.append(myImg)
            myTr.append(myTd)
      }
         }
        var mytbody =  document.querySelector("tbody")
         mytbody.append(myTr)

      })
      
   }
    return <div>
    {console.log(todos)}
  {/* {todos.map((e)=>{
  return  <li>{e.date}</li>
  })} */}
  <button type="button" onClick={()=>handledata()} className="btn btn-warning">get data</button>
 <div className="container">
     <div className="row">
     <table className="table table-success table-striped">
      <thead>
          <tr>
              <td>ID</td>
              <td>TITLE</td>
              <td>PRICE</td>
              <td>DESCRIPTION</td>
               <td>CATEGORY</td>
              <td>IMAGE</td>
             
              
          </tr>
      </thead>
      <tbody>

      </tbody>
  </table>
     </div>
 </div>
</div>
}