function handleUpdate(i){
    return new Promise ((done)=>{
        var UPDATE_URL = USER_URL + datas[i].id ;
     var fillText = new XMLHttpRequest;
    fillText.onreadystatechange = function (data){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
             datas = JSON.parse(cloudData);
            console.log(datas);
            done();
           
        }
    }
    fillText.open("PUT" , UPDATE_URL);
    fillText.setRequestHeader("content-type" , "application/json")
    fillText.send(JSON.stringify(data));
    })
}


function upDate() {
    var data = {...datas[index]};
    for (a in data) {
        data[a] = document.getElementById(a).value;
    }
    handleUpdate(i).then(()=>{
        displayElements();
    })
     
}