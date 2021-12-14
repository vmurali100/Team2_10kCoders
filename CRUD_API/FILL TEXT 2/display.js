function displayDetails(){
    allDetails.forEach((user,i )=>{
        var myTr = document.createElement("tr");
        for(a in user){
            var myTd = document.createElement("td");
            myTd.innerHTML=user[a];
            myTr.appendChild(myTd)
        }
        document.getElementById("tbody").appendChild(myTr);    
    })
}