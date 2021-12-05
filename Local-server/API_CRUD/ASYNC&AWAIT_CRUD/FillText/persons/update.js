var index
function upDate() {
  
var UPDATE_URL = USER_URL + datas[index].zip ;
var data = {...datas[index]}
    for (a in data) {
      data[a] = document.getElementById(a).value;
    }
    var fillText = new XMLHttpRequest () ;
     fillText.onreadystatechange = function (){
    if(fillText.readyState == 4  && fillText.status ==200){
        var datas = JSON.parse (fillText.response);
        console.log(datas)
        displayElements();
    }
     }
     fillText.open ("PUT" , UPDATE_URL);
     fillText.setRequestHeader("Content-Type" , "application/json");
     fillText.send(JSON.stringify(data));
     datas[index] = {...data} ;
    // document.getElementById("update").style.display = "none" ;
    document.getElementById("table_row").style.display = "block";
document.getElementById("form_row").style.display = "none" ;
   
}