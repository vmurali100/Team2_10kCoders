function displayName(){
    allData.forEach(()=>{
        var myTr = document.createElement("tr");
        for (a in user){
          var myTd = document.createElement("td");
          myTd.innerHTML = user[a];
          myTr.appendChild(myTd)
        }
        document.querySelector("tbody").appendChild(myTr)
    })
}