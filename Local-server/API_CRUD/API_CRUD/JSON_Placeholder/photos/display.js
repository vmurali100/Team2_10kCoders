 
 
 var all;
 // display elements
  // var all = JSON.parse(localStorage.getItem("localData"));
// var employee = {
//   userId: "",
//         id: "",
//         title: "",
//         body: "",
       
// }
 function displayElements() {
     all = datas ;
    document.querySelector("tbody").innerHTML = "";
    all.forEach((employee , i) => {
        var myTr = document.createElement("tr");
        // var indexId = document.createElement("td");
        // indexId.innerHTML = i + 1;
        // myTr.appendChild(indexId);
        document.querySelector("tbody").appendChild(myTr);
        for (a in employee) {
          
          if( a !== "thumbnailUrl" && a !== "url" )
          {
            var myTd = document.createElement("td");
            myTd.innerHTML = employee[a];
            myTr.appendChild(myTd);
          } else if ( a == "url") {
            var myTd = document.createElement("td");
           var image =  document.createElement("img");
           image.setAttribute("src" , employee[a] );
           image.style.width = "100px" ;
           image.style.height = "100px" ;
           myTd.appendChild(image);
            myTr.appendChild(myTd);
          }else if ( a == "thumbnailUrl") {
            var myTd = document.createElement("td");
           var image =  document.createElement("img");
           image.setAttribute("src" , employee[a] );
           image.style.width = "70px" ;
           image.style.height = "70px" ;
           myTd.appendChild(image);
            myTr.appendChild(myTd);
          }

          
        }
        
        // edit button
        var edited = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "btn-warning");
        editBtn.setAttribute("onclick", "editElement(" + i + ")")
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