let API_URL = "http://localhost:3000/products";
var allProducts = [];
function getAllProducts() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allProducts = JSON.parse(getInfo.response);

      console.log(allProducts)
      displayProducts()

    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send()
}


function displayProducts(){
  allProducts.forEach((product)=>{
    var myTr = document.createElement("tr");

    for (a in product) {
        var myTd = document.createElement("td");
        myTd.innerHTML = product[a];
        myTr.appendChild(myTd);
      }
  })
}
getAllProducts()


