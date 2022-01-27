var h1 = document.createElement("h1")
h1.innerText = "Basic 84"
var print = document.getElementById('hgroup').appendChild(h1)

console.log(print)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

//navbar
for (i = 0; i < 5; i++) {
      var li = document.createElement("li")
      document.getElementById("navul").appendChild(li)
      li.setAttribute("class", "lis")
}
var print = document.getElementById("navul")
console.log(print)

for (j = 0; j < 5; j++) {
    if(j==4){
        var a = document.createElement("a")
        a.innerText = "Users Data"
        document.getElementsByClassName("lis")[j].appendChild(a)
        a.setAttribute("href","./users.html")
        a.setAttribute("id","user")
        break
        
  }
      var a = document.createElement("a")
      a.innerText = "Text Link"
      document.getElementsByClassName("lis")[j].appendChild(a)

      if(j==0){
            a.setAttribute("href","./index.html")
      }
     
}

//Adding User Data
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
        
    },
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
        
    },
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
        
    },
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
        
    },
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
        
    },
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
        
    },
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
        
    },
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
        
    },
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
        
    },
    {
        "fname": "Latasha",
        "lname": "Bashford",
        "tel": "(781)968-3573",
        "address": "6514 Ipsum Ct",
        
    }
    
]
var table = document.createElement("table")
document.getElementById("container").appendChild(table)
table.setAttribute("border","1")
table.style.width="100%"

var thead = document.createElement("thead")
document.querySelector("table").appendChild(thead)
thead.style.textAlign="center"

for(i=0;i<4;i++){
    var th = document.createElement("th")
    th.innerText="TableHEad"
    document.querySelector("thead").appendChild(th)

}

var tbody = document.createElement("tbody")
document.querySelector("table").appendChild(tbody)
//for(i=0;i<4;i++){
//    var tr = document.createElement("tr")
//    document.querySelector("tbody").appendChild(tr)
//    tr.setAttribute("class","trs")
//    for(j=0;j<4;j++){
//       var td = document.createElement("td")
//        td.innerText="somethgin"
//       document.getElementsByClassName("trs")[i].appendChild(td)
 //   }
//}
array.forEach(function(user){
    var tr = document.createElement("tr")
    document.querySelector("tbody").appendChild(tr)
    
    for(a in user){
        console.log(a)
        var td = document.createElement("td")
        td.innerText=user[a]
        tr.appendChild(td)        
    }

    
})
console.log(tbody)
//var tt = document.querySelector("table")
//console.log(tt)
container.style.height="400px"
container.style.overflow="scroll"

var p1 = document.createElement("p")
p1.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
p1.setAttribute("class", "f1_left")
document.getElementById("footer").appendChild(p1)

var p2 = document.createElement("p")
p2.innerText="Template by  OS Templates"
p2.setAttribute("class","f1_right")
document.getElementById("footer").appendChild(p2)
p2.style.float="right"