 
 
//  var all = JSON.parse(localStorage.getItem("data"));
// var all ;
//    var employee = {
//      id:"",
//         email: "",
//         username: "",
//         password:"",
//         phone: "",
       
//     }
 // display elements
// var all = getinfo;
 function displayElements() {
    // all = users ;
  
   document.querySelector("tbody").innerHTML = "";
    all.forEach((employee , i) => {
        var myTr = document.createElement("tr");
        // var indexId = document.createElement("td");
        // indexId.innerHTML = i + 1;
        // myTr.appendChild(indexId);
        document.querySelector("tbody").appendChild(myTr);
        for (a in employee) {
          if (a !== "address" &&  a !="name"  && a !="__v"){
            var myTd = document.createElement("td");
            // var myTr = document.createElement("tr");
            myTd.innerHTML = employee[a];
            myTr.appendChild(myTd);
          }
        }
        // edit button
        var edited = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "btn-warning");
        editBtn.setAttribute("onclick", "editElement(" + i +")")
        editBtn.innerHTML = 'edit';
        myTr.appendChild(edited)
        edited.appendChild(editBtn)

        //    delete button 
        var deleted = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn-danger");
        deleteBtn.setAttribute("onclick", "deleteElement(" + i + ")")
        deleteBtn.innerHTML = 'Delete';

        myTr.appendChild(deleted)
        deleted.appendChild(deleteBtn)

        document.querySelector("tbody").appendChild(myTr);
    });
   
}
 displayElements();
 getData()