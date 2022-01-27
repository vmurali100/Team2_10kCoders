function storing() {
    var tbody = document.createElement("tbody")
    document.querySelector("table").appendChild(tbody)
    document.querySelector('tbody').innerHTML=""
    users.forEach((user)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in user){
        var td = document.createElement("td")
        td.innerText=user[a]
        tr.appendChild(td)
        }
    })
    
}