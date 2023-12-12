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