

// function getData() {
//     console.log("data ra nen")
//     var getInfo = new XMLHttpRequest();
//     getInfo.onreadystatechange = function () {
//         if (getInfo.status == 200 && getInfo.readyState == 4) {
//             console.log(getInfo.response)
//             // let data = JSON.parse(getInfo.response)
//             // localStorage.clear();
//             localStorage.setItem('persons', getInfo.response)
//             displayPersons();
//         };

//     };
//     getInfo.open('GET', 'https://fakestoreapi.com/users');
//     getInfo.send();

// }