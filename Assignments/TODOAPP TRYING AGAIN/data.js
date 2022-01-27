// var data = [
//     {activity:"To listen to class",activityStatus:"InProgress",activityId:1},
//     {activity:"To Read The Bible",activityStatus:"InProgress",activityId:2},
//     {activity:"To do ASSIGNMENTS",activityStatus:"InProgress",activityId:3},
//     {activity:"To Pray",activityStatus:"InProgress",activityId:4}
// ]
// localStorage.setItem("dataT",JSON.stringify(data))
var data = JSON.parse(localStorage.getItem("dataT"))
function display(){
    document.querySelector("tbody").innerText = ""
    data.forEach((activity,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in activity){
            if(a != "activityId"){
                var td = document.createElement("td")
            tr.appendChild(td)
            td.innerHTML = activity[a]
            }
        }
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editTd.appendChild(editBtn)
        editBtn.setAttribute("type","button")
        editBtn.setAttribute("onclick","edit("+ i +")")
        editBtn.innerHTML = "Edit"
        editBtn.setAttribute("class","btn btn-warning")
    
        var delTd = document.createElement("td")
        tr.appendChild(delTd)
        var delBtn = document.createElement("button")
        delTd.appendChild(delBtn)
        delBtn.innerHTML = "Delete"
        delBtn.setAttribute("type","button")
        delBtn.setAttribute("class","btn btn-danger")
        delBtn.setAttribute("onclick","del("+i+")")
    })
    
}
display()
function edit(i){
    window.location.href = "details.html?"+data[i].activityId
}

function del(i){
        var data1 = JSON.parse(localStorage.getItem("dataT"))
        data1.splice(i,1)
        localStorage.setItem("dataT",JSON.stringify(data1))
        display()
}
function newData(){
    window.location.href = "details.html"
}