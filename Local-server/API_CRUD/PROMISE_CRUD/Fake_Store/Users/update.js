
function upDate() {
    let employee = {...all[index]}
 for (a in employee){
    if (a !== "address" && a !== "name" && a !== "__v") {
        employee[a] = document.getElementById(a).value;
      }
    }
     let UPDATE_URL = USER_URL+ employee.id 
     var getinfo = new XMLHttpRequest() ;
     getinfo.open("PUT" , UPDATE_URL );
     getinfo.setRequestHeader ("Content-Type" , "application/json");
     getinfo.send(JSON.stringify(employee));
      all [index] = {...employee}
     getinfo.onreadystatechange = function (){
         if(getinfo.readyState == 4 && getinfo.status == 200){
              all = JSON.parse( getinfo.response);
             console.log(all)
            displayElements(all);
         }
     };
 


}
// upDate();
