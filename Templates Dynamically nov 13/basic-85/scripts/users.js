//Header
var h1 = document.createElement("h1")
h1.innerText = "Basic 85"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

for (i = 0; i < 5; i++) {
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class", "lis")
    if (i == 0) {
        var a = document.createElement("a")
        a.innerText = "Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href","./index.html")
        continue
    }
    
    var a = document.createElement("a")
    a.innerHTML = "Text Link"
    document.getElementsByClassName("lis")[i].appendChild(a)
}

//Container
var table = document.createElement("table")
document.getElementById("container").appendChild(table)
table.setAttribute("border","1px")
table.style.width="100%"
table.style.textAlign="center"

var thead = document.createElement("thead")
document.querySelector("table").appendChild(thead)

for(i=0;i<4;i++){
    var th = document.createElement("th")
    document.querySelector("thead").appendChild(th)
    th.innerText=prompt("Enter "+(i+1)+" Heading")
}
var array = [
    {
        "fname": "Ericka",
        "lname": "Wray",
        "tel": "(507)306-8781",
        "address": "6134 Molestie Rd",
    },
    {
        "fname": "Latia",
        "lname": "Sharp",
        "tel": "(487)175-0323",
        "address": "9599 Mattis Ln",
        
    },
    {
        "fname": "Artina",
        "lname": "Bowman",
        "tel": "(961)130-9629",
        "address": "2670 Rutrum Ave",
        
    },
    {
        "fname": "Carolyn",
        "lname": "Benjamin",
        "tel": "(783)133-9623",
        "address": "131 Malesuada Ct",
        
    },
    
    {
        "fname": "Latia",
        "lname": "Sharp",
        "tel": "(487)175-0323",
        "address": "9599 Mattis Ln",
        
    },
    {
        "fname": "Artina",
        "lname": "Bowman",
        "tel": "(961)130-9629",
        "address": "2670 Rutrum Ave",
        
    },
    {
        "fname": "Carolyn",
        "lname": "Benjamin",
        "tel": "(783)133-9623",
        "address": "131 Malesuada Ct",
        
    }
    ,
    
    {
        "fname": "Latia",
        "lname": "Sharp",
        "tel": "(487)175-0323",
        "address": "9599 Mattis Ln",
        
    },
    {
        "fname": "Artina",
        "lname": "Bowman",
        "tel": "(961)130-9629",
        "address": "2670 Rutrum Ave",
        
    },
    {
        "fname": "Carolyn",
        "lname": "Benjamin",
        "tel": "(783)133-9623",
        "address": "131 Malesuada Ct",
        
    }
]
array.forEach((user)=>{
    var tbody = document.createElement("tbody")
    document.querySelector("table").appendChild(tbody)
    var tr = document.createElement("tr")
    document.querySelector("tbody").appendChild(tr)
    for(a in user){
        var td = document.createElement("td")
        td.innerText=user[a]
        tr.appendChild(td)

    }
})


var p3 = document.createElement("p")
p3.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
document.getElementById("footer").appendChild(p3)
var p4 = document.createElement("p")
p4.innerText = "webDesigner-Teja"
document.getElementById("footer").appendChild(p4)
p4.style.fontWeight="bold"
p4.style.fontSize="20px"
p4.style.color="orange"
p4.style.float = "right"