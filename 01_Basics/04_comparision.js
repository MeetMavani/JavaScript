console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);       
console.log(null == 0);     // equality check and comparision operators work differently then each other
console.log(null >= 0);     // comparisions convert null to a number, treating it as 0.


console.log(undefined == 0);
console.log(undefined > 0);      
console.log(undefined < 0);     

// avoid these type of conversions (null and undefined)
// coz they create confusions


// ===

console.log("2" === 2);