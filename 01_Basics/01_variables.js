const accountId = 144553
let accountEmail = "meet@google.cpm"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 //not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in blog scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])