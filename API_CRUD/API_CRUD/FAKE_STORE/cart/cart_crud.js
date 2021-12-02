let api_url = "http://localhost:3000/carts"
var allDetails = []
function getAllDetails() {
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {

            allDetails = JSON.parse(getInfo.response)
            console.log(allDetails)

        }
    }
    getInfo.open("GET", api_url)
    getInfo.send()
}
getAllDetails()