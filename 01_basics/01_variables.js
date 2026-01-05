const accountID = 144553  //you can not change the value
let accountEmail = "amol@amol.com" 
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountID = 2  //Not allowed TypeError: Assignment to constant variable.


accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Bangalore"


console.log(accountID);

/*
Prefer not to use Var
Because of issue on block scope & functional scope
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
