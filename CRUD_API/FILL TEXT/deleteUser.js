// Delete js
function deleteUser(i){
    var DEL_URL = FILLTEXT_URL+allData[i].id;
    var getData = new XMLHttpRequest();
    getData.onreadystatechange = function(){
        if(getData.status==200 && getData.readyState==4){
            allData = JSON.parse(getData.response)
            displayAllData()
        }
    }
    getData.open("DELETE",DEL_URL)
    getData.send()
}