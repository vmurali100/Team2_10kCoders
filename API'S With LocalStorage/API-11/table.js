function table(){
    data = JSON.parse(localStorage.getItem("data10"))
    document.querySelector("tbody").innerHTML = " "
    data.forEach((user,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
         for(a in user){
            
             console.log("printchebweh")
             var td = document.createElement("td")
             td.innerText = user[a]
             tr.appendChild(td)
         }

         var editTd = document.createElement("td")
         tr.appendChild(editTd)
         var editBtn = document.createElement("button")
         editBtn.innerText = "Edit"
         editBtn.setAttribute( "type","button")
         editBtn.setAttribute("class","btn btn-warning")
         editBtn.setAttribute("onclick","edit("+ i +")")
         editTd.appendChild(editBtn)

         var delTD = document.createElement("td")
         tr.appendChild(delTD)
         var delBtn = document.createElement("button")
         delTD.appendChild(delBtn)
         delBtn.innerText = "Delete"
         delBtn.setAttribute("type", "button")
         delBtn.setAttribute("class", "btn btn-danger")
         delBtn.setAttribute("onclick", "del(" + i + ")")
    })
}

var index
 function edit(i){
     index=i
     for(a in user){
         document.getElementById(a).value = data[i][a]
     }
     document.getElementById("update").style.display = "block"
     document.getElementById("submit").style.display = "none"
 }

 function updateUser(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    document.getElementById("update").style.display="none"
    document.getElementById("submit").style.display = "block"
    data10 = JSON.parse(localStorage.getItem("data10"))
    data10[index] = {...user}
    localStorage.setItem("data10",JSON.stringify(data10))
    table()
}

function del(i){
    data10 = JSON.parse(localStorage.getItem("data10"))
    data10.splice(i,1)
    localStorage.setItem("data10",JSON.stringify(data10))
    table()
}