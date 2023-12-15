// singleton
// object.create

// object literals 

const mySym = Symbol("key1")    // Symbol 


const JsUser = {
    name: "Meet",
    age: 22,
    [mySym]: "myKey1",
    email: "meet@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"] ,
    "Full name": "Meet Mavani"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser.Full name);    // can't access the key "Full name" value with '.' method
// console.log(JsUser[mySym]);          // Symbol 

JsUser.email = "meet@micro.com"
// Object.freeze(JsUser)
JsUser.email = "meet@amazon.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
