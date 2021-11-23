function table(){
    document.querySelector("tbody").innerHTML = " "
    persons.forEach((person1,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in person1){
            var td = document.createElement("td")
            td.innerText = person1[a]
            tr.appendChild(td)
        }
        var edittd =  document.createElement("td")
        tr.appendChild(edittd)
        var editBtn =  document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("class","btn btn-warning")
        edittd.appendChild(editBtn)
    })
}
table()
