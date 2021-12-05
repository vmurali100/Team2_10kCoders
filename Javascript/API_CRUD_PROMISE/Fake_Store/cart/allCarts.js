let API_URL = "http://localhost:3000/carts/";
var allCarts = [];
function getAllCarts() {
  return new Promise((resolve)=>{
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        allCarts = JSON.parse(getInfo.response);
        console.log(allCarts)
        resolve()
  
      }
    }
    getInfo.open("GET", API_URL);
    getInfo.send()

  });
 
}



function displayCart(){
  allCarts.forEach((cart,i)=>{
    var myTr = document.createElement("tr");
    for (a in cart) {
      if (a !== "products" && a !=="__v") {
          var myTd = document.createElement("td");
          myTd.innerHTML = cart[a];
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
getAllCarts().then(()=>{
  displayCart();
})


function editUser(i) {
  index=i;
  for(a in allCarts[i]){
    if(a !== "products" && a !=="__v" ){
      document.getElementById(a).value = allCarts[i][a]
    } 
  }

  console.log(allCarts[i])
}


function handleDelete(i){
  return new Promise((resolve)=>{
    var DEL_URL = API_URL+allCarts[i].id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        resolve()
    };
  }
    getInfo.open("DELETE", DEL_URL);
    getInfo.send()
  })
}


function deleteUser(i) {
  handleDelete(i).then(()=>{
    displayCart()
  })
 
}

function hanldeUpdate(cart){
  return new Promise((resolve)=>{
      let UPDATE_URL = API_URL+cart.id
      var getInfo = new XMLHttpRequest();
      getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
          resolve()
        }
      };
      getInfo.open("PUT", UPDATE_URL);
      getInfo.setRequestHeader("Content-type","application/json")
      getInfo.send(JSON.stringify(cart));
  })
}

function updateUser(){
  let cart = {...allCarts[index]}

  for(a in cart){
    if(a !== "products" && a !=="__v"){
      cart[a]= document.getElementById(a).value 
    } 
  }
hanldeUpdate(cart).then(()=>{
  displayCart()
})
}
