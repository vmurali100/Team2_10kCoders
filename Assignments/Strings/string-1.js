let str = "My name is Teja"
console.log(str.length)
let str1 = "My Name is \"Teja\""
console.log(str1)
console.log(str1.slice(5,9))
console.log(str1.substring(3,9))
console.log(str1.substr(0,4))
console.log(str1.replace("Teja","TEj"))
console.log(str1.toLocaleUpperCase())
console.log(str1.toLowerCase())
console.log(str1.concat(" ","Ulisetti"))
var str3 = "Iam a new String"
console.log(str3)
console.log(str3.trim())
console.log(str3.charAt(2))
console.log(str3.charCodeAt(2))
var str4 = str3.split("")
console.log(str4)
console.log(str4.reverse().join(""))
console.log(str3.lastIndexOf("n"))
console.log(str3.match(/i/g))

var fname ="Teja"
var lname = "Ulisetti"
var str7 =`my name is ${fname} ${lname}`
console.log(str7)