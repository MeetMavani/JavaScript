let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isloggedIn = "meet"

let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "meet" => true

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations *************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " meet"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2" + "2");
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100      // learn more about prefix and postfix from MDN docs
++gameCounter;             // just search prefix and postfix js mdn
console.log(gameCounter);

// link to study more about conversions
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
