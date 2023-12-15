// Immediately Invoked Function Expressions (IIFE)

( function chai () {
    // named iife
    console.log(`DB CONNECTED`);
 })();

 // Global scope k pollution se problem hoti kai baar toh uss Global scope k jo variables ya jo bhi waha
 // declaration hai uske pollution ko hatane k liye humne iife use kiya

 ( () => {
    // simple unnamed iife
    console.log(`DB CONNECTED TWO`);
 } ) ();

 ( (name) => {
    // simple with params
    console.log(`DB CONNECTED TWO ${name}`);
 } ) ("meet")
