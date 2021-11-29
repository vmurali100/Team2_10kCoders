 
 
//  var all = JSON.parse(localStorage.getItem("localData"));
var all ;
   var employee = {
    category: " dsjkal;",
    description: "FGHJKL; ",
    id: 1 ,
    image: "GHJKL ",
    price: 5,
    rating:{
    count: " "  ,
    rate: " " },
    title: " ",
   }
 // display elements
// var all = getinfo;
 function displayElements(data) {
    all =  data;
  
   document.querySelector("tbody").innerHTML = "";
    all.forEach((employee ,i ) => {
        var myTr = document.createElement("tr");
        // var indexId = document.createElement("td");
        // indexId.innerHTML = i + 1;
        // myTr.appendChild(indexId);
         document.querySelector("tbody").appendChild(myTr);
        for (a in employee) {
          if (a !== "rating"){
            var myTd = document.createElement("td");
            myTd.innerHTML = employee[a];
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
displayElements(data);