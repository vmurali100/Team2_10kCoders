let API_URL = "http://localhost:3000/products/"
var allProducts = []
function getAllProducts() {
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {

            allProducts = JSON.parse(getInfo.response)
            console.log(allProducts)
            displayProducts()   //we have to call the displayusers() function to displayuser 
        }
    }
    getInfo.open("GET", API_URL)
    getInfo.send()
}
function displayProducts() {                  // we have created a function  to dispaly products dynamically
    allProducts.forEach((products, i) => {      //it is call back function (we are saying  allusers to send all properties to(display)on user )
        var myTr = document.createElement("tr")
        for (a in products) {
            if (a !== "rating") {
                var myTd = document.createElement("td")
                myTd.innerHTML = products[a]
                myTr.appendChild(myTd)
            }
            else if (a == "rating") {
                var myTd = document.createElement("td")
                myTd.innerHTML = products[a].count
                myTr.appendChild(myTd)
                var myTd = document.createElement("td")
                myTd.innerHTML = products[a].rate
                myTr.appendChild(myTd)
            }

        }


        //to edit
        var editTd = document.createElement("td")
        var editbtn = document.createElement("button")
        editbtn.innerHTML = "EDIT"
        editbtn.setAttribute("class", "btn btn-warning")
        editbtn.setAttribute("onclick", "editProducts(" + i + ")")
        editTd.appendChild(editbtn)
        myTr.appendChild(editTd)


        //to delete
        var deleteTd = document.createElement("td")
        var deletebtn = document.createElement("button")
        deletebtn.innerHTML = "DELETE"
        deletebtn.setAttribute("class", "btn btn-danger")
        deletebtn.setAttribute("onclick", "deleteProducts(" + i + ")")
        deleteTd.appendChild(deletebtn)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}
getAllProducts()
function editProducts(i) {
    index = i
    for (a in allProducts[i]) {
        if (a !== "rating") {
            document.getElementById(a).value = allProducts[i][a]
        }
    }
    console.log(allProducts)

}
function deleteProducts(i) {
    console.log(allProducts[i])
    var DEL_url = API_URL + allProducts[i].id
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {

            allproducts = JSON.parse(getInfo.response)
            console.log(allProducts)
            displayProducts()  //we have to call the displayusers() function to displayuser 
        }
    }
    getInfo.open("DELETE", DEL_url)
    getInfo.send()

}
function updateProducts(i) {
    let products = { ...allProducts[index] }
    for (a in allProducts[i]) {
        if (a !== "rating") {
            user[a] = document.getElementById(a).value
        }
    }
    console.log(products)
}