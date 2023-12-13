// Dates 

let myDate = new Date()
// console.log(myDate);                            // 2023-12-13T10:24:22.862Z
// console.log(myDate.toString());                 // Wed Dec 13 2023 10:24:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());             // Wed Dec 13 2023
// console.log(myDate.toISOString());              // 2023-12-13T10:24:22.862Z
// console.log(myDate.toJSON());                   // 2023-12-13T10:24:22.862Z
// console.log(myDate.toLocaleDateString());       // 12/13/2023
// console.log(myDate.toLocaleString());           // 12/13/2023, 10:24:22 AM
// console.log(myDate.toTimeString());             // 10:24:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());              // Wed, 13 Dec 2023 10:24:22 GMT


// console.log(typeof myDate);                     // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()                // or new Date()
       
// console.log(myTimeStamp);               // 1702463651451, milli sec value from 1st jan 1970 till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay() + 1);  // or getMonth and many more


// You can customize localeString as shown above

newDate.toLocaleString('default', {         // first is internationalization and second is object
    weekday: "long",                        // in object press ctrl + space for showing all properties
    dateStyle: "short"                      // and you can define those props as per your wish
})
