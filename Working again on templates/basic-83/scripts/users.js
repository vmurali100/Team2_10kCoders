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
        a.innerText = "Enter Details"
        a.setAttribute("href","./EnterDetails.html")
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    if(i==4){
        a.innerText = "Data Table"
     
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    a.innerText = "TextLink"
    document.getElementsByClassName("lis")[i].appendChild(a)
}

var array1=[
    {
        "id": 5726,
        "email": "RCarnu@dolor.org",
        "username": "ABechtold",
        "password": "ZGffX"
    },
    {
        "id": 5727,
        "email": "MLehman@magna.org",
        "username": "MBrooks",
        "password": "tqJxH"
    },
    {
        "id": 5728,
        "email": "SMcwethy@egestas.io",
        "username": "WLakritz",
        "password": "SFpio"
    },
    {
        "id": 5729,
        "email": "ASchade@nec.com",
        "username": "LMontgomery",
        "password": "xMZAy"
    },
    {
        "id": 5730,
        "email": "JMcnamee@egestas.com",
        "username": "KDeno",
        "password": "izzg9"
    },
    {
        "id": 5731,
        "email": "TBenjamin@aliquam.net",
        "username": "REuaparadorn",
        "password": "ET6vl"
    },
    {
        "id": 5732,
        "email": "MBelched@et.com",
        "username": "KOliver",
        "password": "xKevr"
    },
    {
        "id": 5733,
        "email": "AKamradt@nec.io",
        "username": "SUsgiveaway",
        "password": "14wwT"
    },
    {
        "id": 5734,
        "email": "SCovel@pretium.gov",
        "username": "DWagner",
        "password": "xo203"
    },
    {
        "id": 5735,
        "email": "SBurton@eros.com",
        "username": "WMeow",
        "password": "5fBE4"
    }
]

var table = document.createElement("table")
table.setAttribute("border","1px")
table.style.width="100%"
document.getElementById("container").appendChild(table)

var thead = document.createElement("thead")
document.querySelector("table").appendChild(thead)

var th = document.createElement("th")
th.innerText = "ID"
document.querySelector("thead").appendChild(th)
var th = document.createElement("th")
th.innerText = "Email"
document.querySelector("thead").appendChild(th)
var th = document.createElement("th")
th.innerText = "USer Name"
document.querySelector("thead").appendChild(th)
var th = document.createElement("th")
th.innerText = "PASSWORD"
document.querySelector("thead").appendChild(th)

var tbody = document.createElement("tbody")
document.querySelector("table").appendChild(tbody)

array1.forEach((user)=>{
    var tr =document.createElement("tr")
    document.querySelector("tbody").appendChild(tr)
    tr.setAttribute("id","tr")
    for(a in user){
        var td = document.createElement("td")
        td.innerText = user[a]
        console.log(user[a])
        tr.appendChild(td)
    }
})

console.log(table)