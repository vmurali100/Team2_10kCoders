function display(data){
    document.querySelector("tbody").innerHTML = ""
    data.forEach((user,i) => {
        var tr = document.createElement("tr")
       document.querySelector("tbody").appendChild(tr)
       for(a in user){
           if(a=="rating"){
               var td = document.createElement("td")
               td.innerHTML= user[a].rate + " "+user[a].count
               tr.appendChild(td)
               continue
           }
          if(a!="image"){
            var td = document.createElement("td")
            td.innerHTML = user[a]
            tr.appendChild(td)
          }
       }
       var editTd = document.createElement("td")
       tr.appendChild(editTd)
       var editBtn = document.createElement("td")
       editBtn.setAttribute("type","button")
       editBtn.setAttribute("class","btn btn-warning")
       editBtn.innerText = "Edit"
       editBtn.setAttribute("onclick","edit("+ i +")")
       editTd.appendChild(editBtn)
        
    });
}
var index;
function edit(i){
    index = i;
    for(a in user1){
        document.getElementById(a).value = data[i][a]
        document.getElementById("update").style.display ="block"
        document.getElementById("submit").style.display = "none"  
    }
}

function updateuser(){
    for(a in user1){
        user1[a] = document.getElementById(a).value
    }
    data[index] = {...user1}
    localStorage.setItem("data",JSON.stringify(data))
    display()
    document.getElementById("update").style.display = "none"
    document.getElementById("submit").style.display = "block"
}