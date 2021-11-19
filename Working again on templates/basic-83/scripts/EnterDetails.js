
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
//To get The data Direcrly from local storage we use to call thetable()
table()

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
        //Adding Edit Button
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.innerText="Edit"
        editBtn.setAttribute("class","btn btn-warning")
        editBtn.setAttribute("onclick","edit("+ i +")")
        editTd.appendChild(editBtn)
        
        //Adding Delete button
        var delTd = document.createElement("td")
        tr.appendChild(delTd)
        var delBtn = document.createElement("button")
        delBtn.innerText="Delete"
        delBtn.setAttribute("class","btn btn-danger")
        delBtn.setAttribute("onclick",'del(' + i + ')')
        delTd.appendChild(delBtn)

    })
}
var index;
function edit(i){
    index=i; 
    console.log("Edit the value",i)
    for(a in person){
        document.getElementById(a).value = persons[i][a]
    }
    document.getElementById("update").style.display="block"
    document.getElementById("submit").style.display="none"
}

function updateperson(){
    for(a in person){
        person[a] = document.getElementById(a).value
    }
    persons[index]={...person}
    table()
    localStorage.setItem('persons',JSON.stringify(persons))
    document.getElementById("update").style.display="none"
    document.getElementById("submit").style.display="block"
    clear() 

}


function del(i){
    console.log("Display the values of",i)
    persons.splice(i,1)
    localStorage.setItem('persons',JSON.stringify(persons))
    table()
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