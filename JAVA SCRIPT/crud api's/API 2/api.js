var getinfo = new XMLHttpRequest();
getinfo.onreadystatechange = function(){
    let data = JSON.parse()
    if(getinfo.status==200 && getinfo.readyState==4){
        console.log(getinfo.response)
    }
}