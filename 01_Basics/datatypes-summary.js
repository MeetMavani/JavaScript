// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id === anotherid);

const bigNumber = 31648974845612213n



// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["hulk", "wanda", "ironman", "thor"]

let myobj = {
    name: "meet",
    age: 22
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ------------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Meet"

let anotherName = myName   // here when we say anotherName = myName, the original val is not assigned
anotherName = "chintu"     // instead an copy of myName value is created in the stack where update is done
                            
console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@xyz"
}

let user2 = user1

user2.email = "meet@google.com"

console.log(user1.email);
console.log(user2.email);