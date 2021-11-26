function table(){
    data = JSON.parse(localStorage.getItem("data11"))
    document.querySelector("tbody").innerHTML = " "
    data.forEach((user,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
         for(a in user){
            if( a == "url" || a=="thumbnailUrl"){
                var td = document.createElement("td")
                tr.appendChild(td)
                var img = document.createElement("img")
                img.setAttribute("src",user[a])
                img.style.width="150px"
                img.style.height="150px"
                td.appendChild(img)
                continue
             }
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
    data11 = JSON.parse(localStorage.getItem("data11"))
    data11[index] = {...user}
    localStorage.setItem("data11",JSON.stringify(data11))
    table()
}

function del(i){
    data11 = JSON.parse(localStorage.getItem("data11"))
    data11.splice(i,1)
    localStorage.setItem("data11",JSON.stringify(data11))
    table()
}