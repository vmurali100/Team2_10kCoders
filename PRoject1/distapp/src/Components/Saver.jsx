import axios from 'axios';
import React,{useState} from 'react';

export const AdminDataPage = () => {

    const [reqData, setreqData] = useState({
        districtName:"",constituencies:[]
    });

    const getDetailsFromServer = ()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/districts").then((res)=>{resolve(res.data)})
        })
    }

    const getDetails = async()=>{
        let dtls = await getDetailsFromServer()
        // var tbody = document.createElement("tbody")
        // document.querySelector("table").appendChild(tbody)
        // document.querySelector("tbody").innerHTML=""
        // dtls.forEach((dtl)=>{
        //    var tr = document.createElement("tr")
        //    document.querySelector("tbody").appendChild(tr)
        //    var td = document.createElement("td")
        //    document.querySelector("tr").appendChild(td)
        //    td.innerHTML=dtl.districtName
        //    var td = document.createElement("td")
        //    document.querySelector("tr").appendChild(td)
        //    td.innerHTML=dtl.constituencies 
        // })

        dtls.forEach((dtl,i)=>{
            var td = document.createElement("td")
            document.getElementById("tr1").appendChild(td)
            td.innerHTML=dtl.districtName
            var td = document.createElement("td")
            document.getElementById("tr1").appendChild(td)
            td.innerHTML = dtl.constituencies
            
            
        })
        
    }
    

  return <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Districts</th>
      <th scope="col">Constituencies</th>
    </tr>
  </thead>
  <tbody>
      <tr id="tr1"></tr>
  </tbody>
</table>
<button onClick={getDetails} type='button'>GetDetails</button>
  </div>;
};

