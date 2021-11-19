var h1 = document.createElement("h1")
h1.innerText = "Basic 83"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

//NavBar
var ul = document.querySelector("ul")
ul.setAttribute("id","navul")
console.log(ul)

for(i=0;i<5;i++){
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class","lis")

    var a = document.createElement("a")
    if(i==0){
        a.innerText = "Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href","./index.html")
        continue
    }
    if(i==3){
        a.innerText = "Enter DetailS"
        
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    if(i==4){
        a.innerText = "Data Table"
        a.setAttribute("href","./users.html")
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    a.innerText = "TextLink"
    document.getElementsByClassName("lis")[i].appendChild(a)
}

var person = {
    fname:"",
    lname:'',
    email:""
}
//var persons=[]
var persons = JSON.parse(localStorage.getItem("persons"))
function store(event){
    event.preventDefault()
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    console.log("This is Object:",person)
    persons.push({...person})
    var convertedpersons = JSON.stringify(persons)
    localStorage.setItem("persons",convertedpersons)
    console.log(convertedpersons)
    console.log("This is Array:",persons)
    clear()
    table()
    validate()   
}

function table(){
    document.querySelector("tbody").innerText=""
    persons.forEach((person1)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in person1){
            var td = document.createElement("td")
            td.innerText=person1[a]
            tr.appendChild(td)

        }
        //Adding Edit Button
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.innerText="Edit"
        editBtn.setAttribute("class","btn btn-warning")
        editTd.appendChild(editBtn)
        
        //Adding Delete button
        var delTd = document.createElement("td")
        tr.appendChild(delTd)
        var delBtn = document.createElement("button")
        delBtn.innerText="Delete"
        delBtn.setAttribute("class","btn btn-danger")
        delTd.appendChild(delBtn)
    })
}

function clear(){
    for(a in person){
        document.getElementById(a).value=""
    }
}

function validate(){
    var formvalidation = true;
    for(a in person){
        var userInput = document.getElementById(a).value
        if(a!='email'){
            if(userInput.length==0){
                formvalidation=false
            }
        }else{
            var emailPattern =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!emailPattern.test(userInput)){
                formvalidation=false
            }
        }
    }
        if(formvalidation){
            document.querySelector("button").removeAttribute("disabled")
        }else{
            document.querySelector("button").setAttribute("disabled",true)//Where was its returning the value
        }

}