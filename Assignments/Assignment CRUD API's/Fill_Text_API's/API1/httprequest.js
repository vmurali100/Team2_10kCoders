function getData()
{
    document.getElementById("getData").style.display = "none";

    var getInfo = new XMLHttpRequest();
    getInfo.open("GET","http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true")
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            // localStorage.setItem("username",getInfo.response);
            var data = JSON.parse(getInfo.response);
            display(data);
            // 
            // if(localStorage.length == 0 )
            // {
            //     if(localStorage.key(0).length < data.length )
            //     {
            //         localStorage.setItem("username",getInfo.response);
            //     }
            // }    
        }
    }
}