// let score = "33"


// console.log(typeof score) //either use the properties

// console.log(typeof(score))   //either found using method


// // Now you want data in the Number format

// let valueinNumber = Number(score)

// console.log(typeof(valueinNumber))
// console.log(valueinNumber)  //So, It will give Nan Value


// "33" -> Number
// "33abc" -> Nan 
// "true" -> Number
// null -> number (0)
// undefined -> Nan

let isLoggedIn = ""

let BooleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof(BooleanLoggedIn))
console.log(BooleanLoggedIn)


// Number form range [-inf,inf] - [0] => returns true
//  Number [0] => false
// string is not null that is empty string => true
// string that is empty string => false