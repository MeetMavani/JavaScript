"use strict"; // treat all JS code as newer version

//alert( 3 + 3 ) // will show error as we are using nodejs, not browser

console.log(3 
    +
     3); // code readability should be high

console.log("Meet");

let name = "meet"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean = true/false
// null => standalone value
// undefined =>
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// 
const a = 1;
console.log(a); // output: 1

// but if 
console.log(b);
const b = 1; // output undefined 

// this is called hoisting in JS 
// what happens in JS is it puts the declaration of const b above the console.log(b)
// only declaration thats why output is undefined
// if you try to console.log(c) it will give error not defined as c is not declared yet.... 