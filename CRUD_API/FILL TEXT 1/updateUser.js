function updateUser(){
    document.getElementById("table").style.display="block";
    var data = {...allData[index]}
    for (a in data){
       data[a]=document.getElementById(a).value
    }
    var UPDATE_URL = FILLTEXT_URL+data.id 
    var getData = new XMLHttpRequest()
    getData.onreadystatechange = function(){
        if(getData.status == 200 && getData.readyState==4){
            allData = JSON.parse(getData.response)
            displayAllData()
        }
    }
        getData.open("PUT",UPDATE_URL)
        getData.setRequestHeader("content-type","application/json")
        getData.send(JSON.stringify(data))
    }
    
