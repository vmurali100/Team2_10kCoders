import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminDataPage = () => {

  let navigate = useNavigate()

  const getDetailsFromServer = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/districts").then((res) => { resolve(res.data) })
    })
  }

  function handleEdit(i){
    console.log("SomeThing New");
  }

  const getDetails = async () => {
    let dtls = await getDetailsFromServer()
    dtls.forEach((dtl, i) => {
      var tr = document.createElement("tr")
      document.querySelector("tbody").appendChild(tr)
      for (var a in dtl) {
        var td = document.createElement("td")
        td.innerHTML = dtl[a]
        tr.appendChild(td)
        
      }
      var editTd = document.createElement("td")
      tr.appendChild(editTd)
      var editBtn = document.createElement("button")
      editTd.appendChild(editBtn)
      editBtn.innerText="Edit"
      editBtn.setAttribute("type","button")
      editBtn.addEventListener("onClick","handleEdit( i )")
      
    })
  }

  const newDetails = ()=>{
    navigate("/enterNewDetais")
  }


  return <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Districts</th>
          <th scope="col">Constituencies</th>
          <th scope='col'>Id</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
    <button onClick={getDetails} type='button'>GetDetails</button>
    <button onClick={newDetails} type="button">EnterNewValues</button>
  </div>;
};

