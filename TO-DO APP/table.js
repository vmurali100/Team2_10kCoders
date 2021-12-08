function table(){
    todoActivities.forEach((todo,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in todo){
            if(a != "activityId"){
                var td = document.createElement("td")
                tr.appendChild(td)
                td.innerText = todo[a]
            }
        }
        var actionTd = document.createElement("td")
        tr.appendChild(actionTd)
        var actionBtn = document.createElement("button")
        actionTd.appendChild(actionBtn)
        actionBtn.innerText = "View Details"
        actionBtn.setAttribute("type","button")
        actionBtn.setAttribute("onclick","viewDetails("+ i +")")
    })
}
function viewDetails(i){
    window.location.href = "details.html?"+todoActivities[i].activityId;
 }