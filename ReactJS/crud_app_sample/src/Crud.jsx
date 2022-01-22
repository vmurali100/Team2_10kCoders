import React, { useState } from "react";

export const Crud = ()=>{
 const [data , setData] = useState([])
    const addnewrecord =()=>{
      document.getElementById("forminput").style.display = "block" ;
      document.getElementById("table_data").style.display = "none" 

    }
    const sumbit_data =(e)=>{
           var allData 
           allData = {...data} ;
           allData[e.target.name] = e.target.value ;

           data.forEach((d)=>{
              var  myTr = document.createElement("tr") ;
              for( var a in d) {
                var  mytd = document.createElement("td") ;
                mytd.innerHTML = d[a] ;
                myTr.append(mytd)
              }
              var  myTbody = document.querySelector("tbody")
               myTbody.append(myTr)
           })
      setData(allData)

        document.getElementById("table_data").style.display = "block"  ;
        document.getElementById("forminput").style.display = "none" 
    }
    return <div>
        <div className="container-fluid" style={{"color" : "grey"}}>
        <div className="container">
            <div className="row">
             <div className="col-2"></div>
             <div className="col-6"></div>
             <div className="col-4">
             <button type="button" class="btn btn-primary" id="add-new-record" onClick={()=>addnewrecord()}><strong><bold>+</bold> Add New Record</strong></button>
                <button type="button" class="btn btn-secondary">Filter</button>
                <button type="button" class="btn btn-success">Clear Filter</button>
             </div>
</div>
<div className="row" id="forminput" style={{"display": "none"}}>
<div className="col-3"></div>
<div className="col-6"><form>
  <div class="mb-3">
    <label for="title" class="form-label">TITLE</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" name="title"/>
     </div>
  <div class="mb-3">
    <label for="auther" class="form-label">AUTHER</label>
    <input type="text" class="form-control" id="auther" name="auther"/>
  </div>
  <div class="mb-3">
    <label for="publisher" class="form-label">PUBLISHER</label>
    <input type="text" class="form-control" id="publisher" name="publisher"/>
  </div>
  <div class="mb-3">
    <label for="stock" class="form-label">STOCK</label>
    <input type="number" class="form-control" id="stock" name="stock" />
  </div>
  
  
  <button type="button" class="btn btn-primary" onClick={(e)=>sumbit_data(e)}>Submit</button>
</form>
</div>
<div className="col-3"></div>
</div>
            <div className="row" id="table_data">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                            <td>AUTHER</td>
                            <td>PUBLISHER</td>
                            <td>STOCK</td>
                            <td>EDIT</td>
                            <td>DELETE</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            
        </div>
    </div>
    </div>

}