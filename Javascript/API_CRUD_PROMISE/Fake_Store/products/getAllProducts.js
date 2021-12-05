
let API_URL = "http://localhost:3000/products/";
var allProducts = [];
function getAllProducts() {
 return new Promise((resolve)=>{
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allProducts = JSON.parse(getInfo.response);

      console.log(allProducts)
      resolve()
    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send()
 });
}


function displayProducts() {
  allProducts.forEach((product, i) => {
    var myTr = document.createElement("tr");

    for (a in product) {
      if (a !== "rating" && a !== "image") {
        var myTd = document.createElement("td");
        myTd.innerHTML = product[a];
        myTr.appendChild(myTd);
      } else if (a == "rating") {
        var myTd = document.createElement("td");
        myTd.innerHTML = product[a].rate
        myTr.appendChild(myTd);
      }

    }
    var EditTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    EditTd.appendChild(editBtn);
    myTr.appendChild(EditTd);

    // to Delete
    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.querySelector('tbody').appendChild(myTr)


  })
}
getAllProducts().then(()=>{
  displayProducts();

})

function editUser(i) {
  index=i;
  for(a in allProducts[i]){
    if(a !== "rating" && a !=="image" && a!== "description"){
      document.getElementById(a).value = allProducts[i][a]
    } 
  }

  console.log(allProducts[i])
}

function handleDelete(i){
  return new Promise((resolve)=>{
    var DEL_URL = API_URL+allProducts[i].id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        resolve()  
      }
    };
    getInfo.open("DELETE", DEL_URL);
    getInfo.send()
  })
}

function deleteUser(i) {
  handleDelete(i).then(()=>{
    displayProducts()
  })  
}

function handleUpdate(product){
  return new Promise((resolve)=>{
    let UPDATE_URL = API_URL+product.id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        resolve() 
      }
    }
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("Content-type", "application/json")
    getInfo.send(JSON.stringify(product))
  })
}

function updateUser(){
  let product = {...allProducts[index]};

  for(a in product){
    if(a !== "rating" && a !=="image" && a!== "description"){
      product[a]= document.getElementById(a).value ;
    } 
  }
handleUpdate(product).then(()=>{
  displayProducts();
})
}

 



