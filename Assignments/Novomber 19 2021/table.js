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
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        editBTn= document.createElement("button")
        editBTn.innerText="Edit"
        editBTn.setAttribute("onclick","edit("+ i +")")
        editBTn.setAttribute("class","btn btn-warning")
        editTd.appendChild(editBTn)

        var delTd = document.createElement("td")
        tr.appendChild(delTd)
        delBTn= document.createElement("button")
        delBTn.innerText="Delete"
        delBTn.setAttribute("onclick","del("+ i +")")
        delBTn.setAttribute("class","btn btn-danger")
        delTd.appendChild(delBTn)

    })
}
//To Display Table Data That Was stored in local storage
table()

var index;
function edit(i){
    index=i;
    for(a in person){
        document.getElementById(a).value = persons[i][a]
        document.getElementById("update").style.display = "block"
        document.getElementById("submit").style.display = "none"
    }
}

function updatePerson(){
    for(a in person){
        person[a] = document.getElementById(a).value
    }
    persons[index] = {...person};
    table()
    localStorage.setItem('persons',JSON.stringify(persons))
    document.getElementById("update").style.display = "none"
    document.getElementById("submit").style.display = "block"
    clear()
}

function del(i){
    persons.splice(i,1)
    //console.log("Deleting in process")
    localStorage.setItem("persons",JSON.stringify(persons))
    table()
}