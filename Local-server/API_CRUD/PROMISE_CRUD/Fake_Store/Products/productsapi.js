var data = [];
var USER_URL = "http://localhost:3000/products/" ;

function getUsersLocalHostData(){
    return new Promise ((done)=>
    {
        var getinfo = new XMLHttpRequest ; 
        getinfo.onreadystatechange = function () {
            if(getinfo.readyState == 4 && getinfo.status == 200){
            data = JSON.parse( getinfo.response);
                console.log(data)
                done();
                //  displayElements();
            }
               
    }
    getinfo.open ("GET" , USER_URL);
    getinfo.send();

document.querySelector("form").style.display = "none" ;
});
   
}
getUsersLocalHostData().then(()=>{
    displayElements(data);
})