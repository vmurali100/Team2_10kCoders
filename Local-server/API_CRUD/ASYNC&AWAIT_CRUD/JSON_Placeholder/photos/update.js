
function upDate() {
    var data = {...all[index]};
    for (a in data) {
        data[a] = document.getElementById(a).value;
    }
     var UPDATE_URL = USER_URL + all[index].id ;
     var fillText = new XMLHttpRequest;
    // fillText.onreadystatechange = function (){
    //     if(fillText.readyState == 4 && fillText.status == 200){
    //         // var cloudData = fillText.response ;
    //         // console.log(cloudData);
    //         //  datas = JSON.parse(cloudData);
    //         // console.log(datas);
    //         displayElements();
    //         // localStorage.setItem("localData" ,cloudData );
    //     }
    // }
    fillText.open("PUT" , UPDATE_URL);
    fillText.setRequestHeader("content-type" , "application/json")
    fillText.send(JSON.stringify(data));
    document.getElementById("form_row").style.display = "none";
    all[index] = {...data};
    displayElements(all);
}