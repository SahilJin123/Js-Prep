const accountID = 12345
let accountEmail = "sahiljindal450@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Patiala"

// accountID = 3  //not possible

console.log(accountID)
console.table([accountID,accountEmail,accountPassword,accountCity])

/*

prefer not to use var because of block scope and functional scope
*/
accountEmail = "dhakd@gmail.com"
accountPassword = "4379384"
accountCity =  "Jaipur"

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])