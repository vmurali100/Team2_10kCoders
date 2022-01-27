var data;
function getData(){
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4){//This ready state will call the function
            data = getInfo.response
            localStorage.setItem("data",data)
            data = JSON.parse(getInfo.response)
            console.log(data)
            display(data)
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/products")
    getInfo.send()
}
getData()