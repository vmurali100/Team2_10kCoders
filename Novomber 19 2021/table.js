function table(){
    document.querySelector("tbody").innerText=""
    persons.forEach((person1,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in person1){
            var td = document.createElement("td")
            td.innerText=person1[a]
            tr.appendChild(td)
        }
    })
}