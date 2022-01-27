function table(){
    document.querySelector("tbody").innerHTML = " "
    data.forEach((user)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in user){
            var td = document.createElement("td")
            var c=""
            if(a=="address"){
              for(b in user[a].geolocation){
                  c+=user[a].geolocation[b]+","
              }
              c+=user[a].city+","+user[a].street+","+user[a].number+","+user[a].zipcode
              td.innerText=c
              tr.appendChild(td)
              continue
            } 
            if(a=="name"){
                var td = document.createElement("td")
                td.innerText=user[a].firstname+" "+user[a].lastname
                tr.appendChild(td)
                continue
            }
            var td = document.createElement("td")
            td.innerText = user[a]
            tr.appendChild(td)


        }
    })
}