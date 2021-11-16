var h1 = document.createElement("h1")
h1.innerText = "Basic 85"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

for(i=0;i<5;i++){
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class","lis")

    var a = document.createElement("a")
    if(i==0){
        a.innerText="Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href","./index.html")
        continue
    }
    if(i==4){
        a.innerText="Employee Data"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href","./users.html")
        continue
    }
    
    a.innerText="Text Link"
    document.getElementsByClassName("lis")[i].appendChild(a)
}


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
    th.innerText=prompt("Enter"+(i+1)+"st Heading")
}
//Container
var array1 = [
    {
        "id": 22263,
        "email": "DSpeth@etiam.gov",
        "username": "KJeffery",
        "password": "T7y7L"
    },
    {
        "id": 22264,
        "email": "CRitchie@mi.org",
        "username": "GMcglaughlin",
        "password": "RvSlg"
    },
    {
        "id": 22265,
        "email": "DGupta@elementum.org",
        "username": "TRossi",
        "password": "GfwXb"
    },
    {
        "id": 22266,
        "email": "MHalligan@sagittis.io",
        "username": "ENicholson",
        "password": "VabEn"
    },
    {
        "id": 22267,
        "email": "DSovine@ante.ly",
        "username": "CZavala",
        "password": "DU7bW"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22268,
        "email": "TMorrow@sed.gov",
        "username": "VWagner",
        "password": "MG4Kq"
    },
    {
        "id": 22269,
        "email": "CPopsikle@aliquam.gov",
        "username": "SGill",
        "password": "RUYFM"
    },
    {
        "id": 22270,
        "email": "LTadeu@neque.net",
        "username": "LBrouillette",
        "password": "BNlCE"
    },
    {
        "id": 22271,
        "email": "DGay@aenean.org",
        "username": "LFrutos",
        "password": "mw98D"
    },
    {
        "id": 22272,
        "email": "ARaj@at.ly",
        "username": "CZavala",
        "password": "Bct8s"
    }
]
container.style.height = "400px"
container.style.overflow = "scroll"

var tbody = document.createElement("tbody")
document.querySelector("table").appendChild(tbody)
array1.forEach((user)=>{
    var tr = document.createElement("tr")
    document.querySelector("tbody").appendChild(tr)
    for(a in user){
        var td = document.createElement("td")
        td.innerText = user[a]
        tr.appendChild(td)
    }
})
//Footer
//F00TEr
var p3 = document.createElement("p")
p3.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
document.getElementById("copyright").appendChild(p3)
var p4 = document.createElement("p")
p4.innerText = "webDesigner-Teja"
document.getElementById("copyright").appendChild(p4)
p4.style.fontWeight="bold"
p4.style.fontSize="20px"
p4.style.color="pink"
p4.style.float = "right"